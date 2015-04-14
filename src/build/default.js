/* global define, module, require, window */
/* global utils, StatementInputBloq, OutputBloq, ProjectBloq, StatementBloq, getBasicBloqs, getProjectBloqs, SVG */
//----------------------------------------------------------------//
// This file is part of the bloqs Project                         //
//                                                                //
// Date: March 2015                                               //
// Author: Irene Sanz Nieto  <irene.sanz@bq.com>                  //
//----------------------------------------------------------------//
// @include ../utils.js
// @include ../bloq.js
// @include ../outputBloq.js
// @include ../statementBloq.js
// @include ../statementInputBloq.js
// @include ../projectBloq.js
// @include ../../res/basic_bloqs.js
'use strict';
(function(factory, root) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery')); // Node
    } else {
        factory(root, root.$); // Browser global
    }
})
(function(root, $) {
    var data = {
        bloqs: [],
        element: '',
        canvas: null,
        code: {
            setup: '',
            loop: ''
        },
        variables: [],
        globalVariables: [],
        localVariables: [],
        project: []
    };
    var field = {};
    var canvas = {};
    data.createCanvas = function(element) {
        if ($.isEmptyObject(canvas)) {
            data.element = element;
            field = SVG(element).size('100%', '100%');
            canvas = field.group().attr('class', 'bloqs-canvas');
        }
        //LISTEN TO GLOBAL ONCHANGE
        // document.getElementById(element).addEventListener('change', function() {
        // }, false);
        data.canvas = canvas;
    };
    data.bloqsToCode = function() {
        data.functionCode(data.bloqs.setup, 'setup');
        data.functionCode(data.bloqs.loop, 'loop');
        return data.code.setup + data.code.loop;
    };
    data.functionCode = function(bloq, _function) {
        if (bloq === data.bloqs.loop || bloq === data.bloqs.setup) {
            data.code[_function] = bloq.code.loop;
        } else {
            data.code[_function] += '   ' + bloq.getCode(_function);
        }
        if (bloq.relations.codeChildren.length > 0) {
            data.functionCode(utils.getBloqById(bloq.relations.codeChildren, data), _function);
        } else {
            data.code[_function] += '\n}\n';
        }
    };
    /**
     * Create a bloq and setup its properties and events.
     *
     * @param bloqData bloq object
     * @param canvas element to create the bloq into
     * @param position x,y position (just useful for the demo version)
     *
     * @returns Object bloq
     */
    data.createBloq = function(bloqData, position) {
        var bloq;
        if (bloqData.hasOwnProperty('statementInput')) {
            bloq = new StatementInputBloq(bloqData, position, data, true);
        } else if (bloqData.hasOwnProperty('output')) {
            bloq = new OutputBloq(bloqData, position, data);
        } else if (bloqData.label === 'loop') {
            bloq = new ProjectBloq(bloqData, position, data);
            data.bloqs.loop = bloq;
        } else if (bloqData.label === 'setup') {
            bloq = new ProjectBloq(bloqData, position, data);
            data.bloqs.setup = bloq;
        } else {
            bloq = new StatementBloq(bloqData, position, data);
        }
        data.bloqs.push(bloq);
        return bloq;
    };
    data.getBloq = function(bloqName, position) {
        return data.createBloq(getBasicBloqs(data.variables)[bloqName], position);
    };
    /**
     * Create a set of bloqs and setup its properties and events.
     *
     * @param path path to the set of JSON files defining the bloqs
     *
     * @returns array of Object bloq
     */
    data.createProjectStructure = function() {
        var bloqTypes = getProjectBloqs();
        var counter = 100;
        for (var i in bloqTypes) {
            data.bloqs.push(this.createBloq(bloqTypes[i], [50, counter], data));
            counter += 100;
        }
        // this.createMenu();
    };
    data.createMenu = function() {
        var bloqTypes = getBasicBloqs();
        var counter = 20;
        for (var i in bloqTypes) {
            data.bloqs.push(this.createBloq(bloqTypes[i], [50, counter]));
            counter += 100;
        }
    };
    data.saveProject = function() {
        data.saveChildBloqs(data.bloqs.loop);
        console.log('savingproject:', JSON.stringify(data.project));
        data.project = [];
    };
    data.saveChildBloqs = function(bloq) {
        var bloqDescription = [];
        if (bloq !== null) {
            if (bloq.relations !== undefined) {
                bloqDescription = this.getBloqData(bloq);
                data.project.push(bloqDescription);
                if (bloq.relations.codeChildren !== undefined) {
                    var codeChild = utils.getBloqById(bloq.relations.codeChildren[0], this);
                    this.saveChildBloqs(codeChild, data.project);
                }
            }
        }
    };
    data.getBloqData = function(bloq) {
        var bloqDescription = [];
        if (bloq.relations.inputChildren !== undefined) {
            for (var i in bloq.relations.inputChildren) {
                if (bloq.relations.inputChildren[i].bloq === 'userInput') {
                    bloqDescription.push({
                        userInput: bloq.relations.inputChildren[i].code
                    });
                }
                if (bloq.relations.inputChildren[i].bloq === 'dropdown') {
                    bloqDescription.push({
                        dropdown: bloq.relations.inputChildren[i].code
                    });
                }
                if (bloq.relations.inputChildren[i].bloq !== undefined && bloq.relations.inputChildren[i].bloq.bloqName !== undefined) {
                    var child = bloq.relations.inputChildren[i].bloq;
                    if (child.relations.inputChildren !== undefined) {
                        console.log('this.getBloqData(child)', this.getBloqData(child));
                        bloqDescription.push(this.getBloqData(child));
                    } else {
                        bloqDescription.push({
                            bloq: bloq.relations.inputChildren[i].bloq.bloqName,
                            location: [bloq.relations.inputChildren[i].bloq.bloqBody.x(), bloq.relations.inputChildren[i].bloq.bloqBody.y()]
                        });
                    }
                }
            }
        }
        return {
            bloq: bloq.bloqName,
            inputs: bloqDescription,
            location: [bloq.bloqBody.x(), bloq.bloqBody.y()]
        };
    };
    data.loadProject = function(project) {
        console.log('project_JSON', project);
        var bloq;
        for (var i in project) {
            if (project[i].bloq !== undefined && project[i].bloq !== 'loop' && project[i].bloq !== 'setup') {
                bloq = this.getBloq(project[i].bloq, project[i].location);
                this.loadChildBloqs(project[i], bloq);
            }
        }
    };
    data.loadChildBloqs = function(projectBloq, bloq) {
        console.log('projectBloq', projectBloq);
        if (projectBloq.inputs.length > 0) {
            for (var i in projectBloq.inputs) {
                if (projectBloq.inputs[i] !== undefined) {
                    if (projectBloq.inputs[i].bloq !== undefined) {
                        console.log('projectBloq.inputs[i].bloq', projectBloq.inputs[i].bloq);
                        this.loadChildBloqs(projectBloq.inputs[i], this.getBloq(projectBloq.inputs[i].bloq, projectBloq.inputs[i].location));
                    }
                    if (projectBloq.inputs[i].userInput !== undefined) {
                        bloq.setUserInput(i, projectBloq.inputs[i].userInput);
                    }
                    //else set the dropdown & userinput values!! :)
                }
            }
        }
    };
    // Base function.
    var Bloqs = function() {
        return data;
    };
    // Export to the root, which is probably `window`.
    root.Bloqs = Bloqs;
}, window);
