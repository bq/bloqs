'use strict';
(function(arduinoGeneration) {

    var INDENT_DEFAULT_CHARACTER = '    ',
        PARAMS_REGEXP = /{([^{].[^\s]*?)}/,
        HARDWARE_INCLUDES_PARAMS_REGEXP = /\[(.[^\s\.]+?)(\.?)(.[^\s\.]*?)\]/,
        BLOQS_HARDWARE_REGEXP = /º\[([^{].*?)\.(.*?)\]/,
        BLOQS_PARAMS_REGEXP = /@{([^{].*?)\.(.*?)}/,
        BLOQS_FUNCTION_PARAMS_REGEXP = /¬{([^{].*?)\.(.*?)}/;


    var includes = {},
        instances = {},
        setupExtraCodeList = {},
        programExtraCodeList = {},
        programFunctionDeclarationsList = {},
        bloqsFunctions = {
            withoutAsterisk: function(text) {
                return text.replace('*', '');
            },
            formatPin: function(pin) {
                if (pin.indexOf('A') !== -1) {
                    pin = pin.replace(/\"/g, '');
                }
                return pin;
            },
            readSensor: function(sensorName, aliasesValuesHashMap, hardwareList) {
                var result;
                var sensorData,
                    i = 0;
                while (!sensorData && (i < hardwareList.components.length)) {
                    if (hardwareList.components[i].name === sensorName) {
                        sensorData = hardwareList.components[i];
                    }
                    i++;
                }
                if (sensorData) {
                    switch (sensorData.type) {
                        case 'analog':
                            result = 'analogRead(' + sensorName + ')';
                            break
                        case 'digital':
                            result = 'digitalRead(' + sensorName + ')';
                            break;
                        case 'LineFollower':
                            result = '(float *) ' + sensorName + '.read()';
                            break;
                        default:
                            result = sensorName + '.read()'
                    }
                }


                return result || '';
            }
        };

    function getCode(arduinoMainBloqs, hardwareList) {
        //console.log('getting code', arduinoMainBloqs);
        includes = {};
        instances = {};
        setupExtraCodeList = {};
        programExtraCodeList = {};
        programFunctionDeclarationsList = {};

        var code = '';

        var varsCode = getCodeFromBloq(arduinoMainBloqs.varsBloq, hardwareList);
        var setupCode = getCodeFromBloq(arduinoMainBloqs.setupBloq, hardwareList);
        var loopCode = getCodeFromBloq(arduinoMainBloqs.loopBloq, hardwareList);

        generateIndependentHardwareCode(hardwareList);
        var prop;
        //after bloqscode to reuse the bucle to fill libraries and instance dependencies
        var includesCode = '';
        for (prop in includes) {
            includesCode += '#include <' + prop + '>\n';
        }

        var setupExtraCode = '';
        for (prop in setupExtraCodeList) {
            setupExtraCode += prop + '\n';
        }

        var programExtraCode = '';
        for (prop in programExtraCodeList) {
            programExtraCode += prop + '\n';
        }

        var programFunctionDeclarations = '';
        for (prop in programFunctionDeclarationsList) {
            programFunctionDeclarations += prop + '\n';
        }



        var instancesCode = '',
            instanceId;
        for (instanceId in instances) {
            if (instances[instanceId].arguments) {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + '(';
                for (var i = 0; i < instances[instanceId].arguments.length; i++) {
                    instancesCode += ' ' + instances[instanceId].arguments[i] + ',';
                }
                if (instances[instanceId].arguments.length > 0) {
                    instancesCode = instancesCode.slice(0, -1);
                }
                instancesCode += ');\n'
            } else if (instances[instanceId].equals) {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + ' = ' + instances[instanceId].equals + ';\n';
            } else {
                instancesCode += instances[instanceId].type + ' ' + instances[instanceId].realName + ';\n';
            }
        }


        code += '/***   Included libraries  ***/\n' + includesCode + '\n\n';
        code += '/***   Global variables and function definition  ***/';
        code += programFunctionDeclarations + '\n';
        code += instancesCode + '\n';
        code += varsCode + '\n\n';
        code += '/***   Setup  ***/' + addSetupCode(setupCode, setupExtraCode) + '\n\n';
        code += '/***   Loop  ***/' + loopCode + '\n\n';
        code += programExtraCode + '\n\n';
        return code;
    }

    function addSetupCode(setupCode, setupExtraCode) {
        var positionToAdd = 13;
        setupExtraCode = '\n' + setupExtraCode + '\n';
        return [setupCode.slice(0, positionToAdd), setupExtraCode, setupCode.slice(positionToAdd)].join('');
    }

    function findItemByProperty(searchValue, list, property) {
        var found = null,
            i = 0;
        while (!found && (i < list.length)) {
            if (list[i][property] === searchValue) {
                found = list[i];
            }
            i++;
        }
        return found;
    }

    function getTypeFromBloq(bloq) {
        var result;
        if (bloq.returnType.value) {
            result = bloq.returnType.value;
        } else {
            var contentId,
                propertyName,
                i = 0;
            switch (bloq.returnType.type) {
                case 'fromDropdown':
                case 'fromDynamicDropdown':
                    contentId = bloq.returnType.idDropdown;
                    propertyName = 'id';
                    break;
            }

            while (!result && (i < bloq.content[0].length)) {
                if (bloq.content[0][i][propertyName] === contentId) {
                    if (bloq.content[0][i].valueType !== -1) {
                        result = bloq.content[0][i].valueType || bloq.content[0][i].value;
                    }
                }
                i++;
            }
        }
        return result || '';
    }

    function getCodeFromBloq(bloqFullStructure, hardwareList) {
        //console.log('getting code from bloq', bloqFullStructure);

        var aliases = bloqFullStructure.content[0],
            childs = bloqFullStructure.childs,
            childsCode = '',
            aliasesValuesHashMap = {},
            matchAliasOnInstance;

        if (bloqFullStructure.arduino.includes) {
            for (var i = 0; i < bloqFullStructure.arduino.includes.length; i++) {
                includes[bloqFullStructure.arduino.includes[i]] = true;
            }
        }

        if (aliases) {
            for (var i = 0; i < aliases.length; i++) {
                if (aliases[i].id) {
                    aliasesValuesHashMap[aliases[i].id] = {
                        value: aliases[i].value || ''
                    };
                } else if (aliases[i].bloqInputId) {
                    aliasesValuesHashMap[aliases[i].bloqInputId] = {};
                    if (aliases[i].value) {
                        aliasesValuesHashMap[aliases[i].bloqInputId].value = getCodeFromBloq(aliases[i].value, hardwareList) || '';

                        if (aliases[i].value.returnType) {
                            aliasesValuesHashMap[aliases[i].bloqInputId].returnType = getTypeFromBloq(aliases[i].value);
                        }
                    } else {
                        aliasesValuesHashMap[aliases[i].bloqInputId].value = '';
                        aliasesValuesHashMap[aliases[i].bloqInputId].returnType = '';
                    }
                }
            }
        }
        if (childs) {
            for (var i = 0; i < childs.length; i++) {
                childsCode += getCodeFromBloq(childs[i], hardwareList);
            }
            aliasesValuesHashMap.STATEMENTS = {
                value: childsCode
            };
        }

        if (bloqFullStructure.arduino.needInstanceOf) {
            var tempInstanceName,
                tempInstanceId;

            for (var i = 0; i < bloqFullStructure.arduino.needInstanceOf.length; i++) {
                addInstance(bloqFullStructure.arduino.needInstanceOf[i], aliasesValuesHashMap, hardwareList);
            }
        }


        if (bloqFullStructure.arduino.setupExtraCode) {
            setupExtraCodeList[processCode(bloqFullStructure.arduino.setupExtraCode, aliasesValuesHashMap, hardwareList)] = true;
        }


        var code;
        if (bloqFullStructure.arduino.conditional) {
            code = bloqFullStructure.arduino.conditional.code[aliasesValuesHashMap[bloqFullStructure.arduino.conditional.aliasId].value];
        } else {
            code = bloqFullStructure.arduino.code;
        }
        code = code || '';

        code = processCode(code, aliasesValuesHashMap, hardwareList);

        if (bloqFullStructure.type !== 'output') {
            code += '\n';
        }

        return code;
    }

    function processCode(code, aliasesValuesHashMap, hardwareList) {
        var match;
        //Especial @
        match = BLOQS_PARAMS_REGEXP.exec(code);
        while (match) {
            //console.log('match!', match);
            //console.log(aliasesValuesHashMap[match[1]]);
            code = code.replace(match[0], aliasesValuesHashMap[match[1]][match[2]]);
            match = BLOQS_PARAMS_REGEXP.exec(code);
        }

        //execute function on code parts ¬
        match = BLOQS_FUNCTION_PARAMS_REGEXP.exec(code);
        while (match) {
            //console.log('match!', match);
            //console.log(aliasesValuesHashMap[match[1]]);
            code = code.replace(match[0], bloqsFunctions[match[2]](aliasesValuesHashMap[match[1]].value, aliasesValuesHashMap, hardwareList));
            match = BLOQS_FUNCTION_PARAMS_REGEXP.exec(code);
        }

        //searchGroups
        match = PARAMS_REGEXP.exec(code);
        while (match) {
            if (aliasesValuesHashMap[match[1]]) {
                code = code.replace(match[0], aliasesValuesHashMap[match[1]].value);
            } else {
                code = code.replace(match[0], '<no element>');
            }

            match = PARAMS_REGEXP.exec(code);
        }

        //hardware vars

        match = BLOQS_HARDWARE_REGEXP.exec(code);
        var tempHardwareData;
        while (match) {
            if (hardwareList && hardwareList.components) {
                tempHardwareData = findItemByProperty(match[1], hardwareList.components, 'name');
                code = code.replace(match[0], accessNestedPropertyByString(tempHardwareData, match[2]));
            } else {
                code = code.replace(match[0], '<no hardware>');
            }

            match = BLOQS_HARDWARE_REGEXP.exec(code);
        }


        return code;
    }

    function accessNestedPropertyByString(object, nestedKey) {
        var properties = nestedKey.split('.');
        var result = JSON.parse(JSON.stringify(object));
        for (var i = 0; i < properties.length; i++) {
            if (result) {
                result = result[properties[i]];
            }
        }
        return result;
    }

    function generateIndependentHardwareCode(hardwareList) {

        var tempSetupExtraCode,
            tempInstanceOf,
            tempIncludes,
            tempProgramExtraCode,
            tempProgramFunctionDeclaration;

        if (hardwareList.components) {
            for (var i = 0; i < hardwareList.components.length; i++) {
                tempSetupExtraCode = null;
                tempInstanceOf = null;
                tempProgramExtraCode = null;
                tempProgramFunctionDeclaration = null;
                tempIncludes = [];
                switch (hardwareList.components[i].id) {
                    case 'led':
                        tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + ', OUTPUT);';
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'const int',
                            equals: hardwareList.components[i].pin.s
                        };
                        break;
                    case 'button':
                    case 'limitswitch':
                    case 'pot':
                    case 'ldrs':
                    case 'sound':
                    case 'irs':
                        tempSetupExtraCode = 'pinMode(' + hardwareList.components[i].name + ', INPUT);';
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'const int',
                            equals: hardwareList.components[i].pin.s
                        };
                        break;

                    case 'bt':
                        tempIncludes = ['SoftwareSerial.h', 'BitbloqSoftwareSerial.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'bqSoftwareSerial',
                            arguments: [
                                hardwareList.components[i].pin.rx,
                                hardwareList.components[i].pin.tx,
                                hardwareList.components[i].baudRate
                            ]
                        };
                        break;
                    case 'sp':
                        tempIncludes = ['SoftwareSerial.h', 'BitbloqSoftwareSerial.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'bqSoftwareSerial',
                            arguments: [
                                0,
                                1,
                                hardwareList.components[i].baudRate
                            ]
                        };
                        break;
                    case 'buttons':
                        tempIncludes = ['BitbloqButtonPad.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'ButtonPad',
                            arguments: [
                                hardwareList.components[i].pin.s
                            ]
                        };
                        break;
                    case 'encoder':
                        tempIncludes = ['BitbloqEncoder.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'Encoder',
                            arguments: [
                                'encoderUpdaterWrapper',
                                hardwareList.components[i].pin.k,
                                hardwareList.components[i].pin.sa,
                                hardwareList.components[i].pin.sb
                            ]
                        };
                        tempProgramFunctionDeclaration = 'void encoderUpdaterWrapper();';
                        tempProgramExtraCode = 'void encoderUpdaterWrapper() {\n' + hardwareList.components[i].name + '.update();\n}';
                        break;
                    case 'joystick':
                        tempIncludes = ['BitbloqJoystick.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'Joystick',
                            arguments: [
                                hardwareList.components[i].pin.x,
                                hardwareList.components[i].pin.y,
                                hardwareList.components[i].pin.k
                            ]
                        };
                        break;
                    case 'lcd':
                        tempIncludes = ['Wire.h', 'BitbloqLiquidCrystal.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'LiquidCrystal',
                            arguments: [
                                '0'
                            ]
                        };
                        tempSetupExtraCode = hardwareList.components[i].name + '.begin(16, 2);' + hardwareList.components[i].name + '.clear();';
                        break;
                    case 'RGBled':
                        tempIncludes = ['BitbloqRGB.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'ZumRGB',
                            arguments: [
                                hardwareList.components[i].pin.r,
                                hardwareList.components[i].pin.g,
                                hardwareList.components[i].pin.b
                            ]
                        };
                        break;
                    case 'rtc':
                        tempIncludes = ['Wire.h', 'BitbloqRTC.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'RTC_DS1307'
                        };
                        break;
                    case 'hts221':
                        tempIncludes = ['Wire.h', 'BitbloqHTS221.h', 'HTS221_Registers.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'HTS221'
                        };
                        tempSetupExtraCode = 'Wire.begin();\n' + hardwareList.components[i].name + '.begin();';
                        break;
                    case 'us':
                        tempIncludes = ['BitbloqUS.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'US',
                            arguments: [
                                hardwareList.components[i].pin.trigger,
                                hardwareList.components[i].pin.echo
                            ]
                        };
                        break;
                    case 'servo':
                    case 'servocont':
                        tempIncludes = ['Servo.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'Servo'
                        };
                        tempSetupExtraCode = hardwareList.components[i].name + '.attach(' + hardwareList.components[i].pin.s + ');';
                        break;
                    case 'irs2':
                        tempIncludes = ['BitbloqLineFollower.h'];
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'LineFollower',
                            arguments: [
                                hardwareList.components[i].pin.s1,
                                hardwareList.components[i].pin.s2
                            ]
                        };
                        break;
                    case 'buzz':
                        tempInstanceOf = {
                            name: hardwareList.components[i].name,
                            type: 'const int',
                            equals: hardwareList.components[i].pin.s
                        };
                        break;
                }

                if (tempInstanceOf) {
                    addInstance(tempInstanceOf, {}, hardwareList);
                }

                if (tempSetupExtraCode) {
                    setupExtraCodeList[tempSetupExtraCode] = true;
                }

                if (tempProgramExtraCode) {
                    programExtraCodeList[tempProgramExtraCode] = true;
                }

                if (tempProgramFunctionDeclaration) {
                    programFunctionDeclarationsList[tempProgramFunctionDeclaration] = true;
                }



                for (var j = 0; j < tempIncludes.length; j++) {
                    includes[tempIncludes[j]] = true;
                }
            }
        }

    }

    function addInstance(needInstanceOf, aliasesValuesHashMap, hardwareList) {
        var tempInstanceName = needInstanceOf.name;
        tempInstanceName = processCode(tempInstanceName, aliasesValuesHashMap, hardwareList);

        if (needInstanceOf.arguments) {
            for (var i = 0; i < needInstanceOf.arguments.length; i++) {
                needInstanceOf.arguments[i] = processCode(needInstanceOf.arguments[i], aliasesValuesHashMap, hardwareList);
            }
        }


        var tempInstanceId = tempInstanceName + String(needInstanceOf.arguments || '');

        instances[tempInstanceId] = {
            equals: processCode(needInstanceOf.equals, aliasesValuesHashMap, hardwareList),
            type: needInstanceOf.type,
            name: needInstanceOf.name,
            realName: tempInstanceName,
            arguments: needInstanceOf.arguments
        };
    }

    arduinoGeneration.getCode = getCode;

    return arduinoGeneration;

})(window.arduinoGeneration = window.arduinoGeneration || {}, undefined);