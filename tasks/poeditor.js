module.exports = function(grunt) {

    var langKeys = {
        'es': 'es-ES',
        'en': 'en-GB',
        'ca': 'ca-ES',
        'de': 'de-DE',
        'eu': 'eu-ES',
        'fr': 'fr-FR',
        'it': 'it-IT',
        'nl': 'nl-NL',
        'pt': 'pt-PT',
        'ru': 'ru-RU',
        'zh-CN': 'zh-CN',
        'gl': 'gl'
    };



    var callPoEditorApi = function(params, callback) {
        var querystring = require('querystring'),
            https = require('https');

        params.api_token = '';

        var postData = querystring.stringify(params);

        var options = {
            hostname: 'poeditor.com',
            port: 443,
            path: '/api/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        var result = '';
        var req = https.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function(chunk) {
                result += chunk;
            });
            res.on('end', function() {
                callback(null, JSON.parse(result));
            });
        });

        req.on('error', function(e) {
            callback(e);
        });

        // write data to request body
        req.write(postData);
        req.end();
    };

    var getPoeditorLanguages = function(projectId, callback) {
        var params = {
            action: 'list_languages',
            id: projectId
        };
        callPoEditorApi(params, function(err, res) {
            callback(err, res.list);
        });
    };

    var exportFromPoeditor = function(projectId, language, type, filter, filePrefix, filePath, callback) {
        filePath = filePath || 'i18n/';
        var https = require('https'),
            params = {
                action: 'export',
                id: projectId,
                type: type,
                language: language,
                filters: filter
            },
            path = filePath + filePrefix + language + '.' + params.type;

        grunt.log.writeln('...Getting ' + language);
        callPoEditorApi(params, function(err, res) {
            if (err) {
                console.log('error on callPoEditorApi');
                callback(err);
            } else {
                https.get(res.item).on('response', function(response) {
                    var body = '';
                    var i = 0;
                    response.on('data', function(chunk) {
                        i++;
                        body += chunk;
                    });
                    response.on('end', function() {
                        //grunt.log.writeln(body.length);
                        if (body.length) {
                            grunt.file.write(path, body);
                        } else {
                            grunt.log.writeln('no 18n here :( ' + path);
                        }
                        callback(null, path, body);
                    });
                }).on('uncaughtException', function(err) {
                    console.log('uncaughtException');
                    console.log(err);
                    callback(err);
                });
            }
        });
    };

    grunt.registerTask('getpoeditorfiles', 'get langauges from poeditor', function(projectId, type, filter, filePrefix) {
        var async = require('async'),
            gruntTaskDone = this.async();
        type = type || 'json';
        filter = filter || 'translated';
        filePrefix = filePrefix || '';

        async.waterfall([
            function(done) {
                getPoeditorLanguages(projectId, done);
            },
            function(languages, done) {
                async.each(languages, function(item, done) {
                        exportFromPoeditor(projectId, item.code, type, filter, filePrefix, null, done);
                    },
                    done);
            }
        ], function(err) {
            if (err) {
                console.log('error :S ' + err);
            }
            gruntTaskDone();
        });

    });

    grunt.registerTask('poeditor2bloqs', 'bloqs po to json', function() {
        var fs = require('fs'),
            originPath = 'i18n/',
            destinationPath = 'src/scripts/bloqs-languages.js',
            hiddenFilePattern = /^\./;

        var folders = fs.readdirSync(originPath);

        var availableLanguages = [];

        folders.forEach(function(file) {
            if (!hiddenFilePattern.test(file)) {
                availableLanguages.push(file.substring(0, file.length - 5));
            }

        });

        var content = '\'use strict\';\n\n(function(bloqsLanguages) {\n        var texts = ';
        var tempFile, resultObject = {};
        for (var i = 0; i < availableLanguages.length; i++) {
            console.log('Procesing...: ' + availableLanguages[i]);
            tempFile = grunt.file.readJSON(originPath + availableLanguages[i] + '.json');
            resultObject[langKeys[availableLanguages[i]]] = {};

            for (var j = 0; j < tempFile.length; j++) {
                resultObject[langKeys[availableLanguages[i]]][tempFile[j].term] = tempFile[j].definition;
            }
        }
        content += JSON.stringify(resultObject);
        content += ';\n        bloqsLanguages.texts = texts;\n    return bloqsLanguages;\n})(window.bloqsLanguages = window.bloqsLanguages || {}, undefined);';
        grunt.file.write(destinationPath, content);

    });

    /**
     * poeditorprojectbackup:42730
     */
    grunt.registerTask('poeditorprojectbackup', 'generate a poeditor backup', function(projectId, timestamp) {
        var date = new Date(),
            dateFormat = timestamp || date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '_' + date.getHours() + '-' + date.getMinutes();

        var async = require('async'),
            gruntTaskDone = this.async(),
            backupFolder = 'backups_i18n/' + dateFormat + '/' + projectId + '/';

        getPoeditorLanguages(projectId, function(err, languages) {
            if (err) {
                console.log('error getting languages');
                console.log(err);
            } else {
                async.parallel([
                    function(done) {
                        //store terms
                        callPoEditorApi({
                            action: 'view_terms',
                            id: projectId
                        }, function(err, terms) {
                            if (err) {
                                done(err);
                            } else {
                                grunt.file.write(backupFolder + 'terms.json', JSON.stringify(terms));
                                done();
                            }
                        });
                    },
                    function(done) {
                        async.each(languages, function(item, done) {
                                exportFromPoeditor(projectId, item.code, 'json', '', '', backupFolder, done);
                            },
                            done);
                    }
                ], function(err) {
                    if (err) {
                        console.log('error :S ' + err);
                    }
                    gruntTaskDone();
                });
            }
        });
    });

    /**
     * grunt poeditorrestore:1446736750041:42730:42730
     */
    grunt.registerTask('poeditorrestore', 'restore poeditor project', function(timestamp, originProjectId, destProjectId) {
        var async = require('async'),
            gruntTaskDone = this.async(),
            backupFolder = 'backups_i18n/' + timestamp + '/' + originProjectId + '/';
        var data = grunt.file.readJSON(backupFolder + 'terms.json');
        var tempFile, languageFile;
        //restore terms
        callPoEditorApi({
            action: 'sync_terms',
            id: destProjectId,
            data: JSON.stringify(data.list)
        }, function(err, res) {
            //restore languages
            async.each(Object.keys(langKeys), function(item, done) {
                callPoEditorApi({
                    action: 'add_language',
                    id: destProjectId,
                    language: item
                }, function() {
                    if (item === 'es') {
                        console.log(err);
                        console.log(res);
                    }
                    console.log('restoring ' + item);
                    languageFile = grunt.file.readJSON(backupFolder + item + '.json');
                    tempFile = [];
                    for (var i = 0; i < languageFile.length; i++) {
                        tempFile.push({
                            term: {
                                term: languageFile[i].term,
                                context: languageFile[i].context
                            },
                            definition: {
                                forms: [languageFile[i].definition]
                            }
                        });
                    }
                    callPoEditorApi({
                        action: 'update_language',
                        id: destProjectId,
                        language: item,
                        data: JSON.stringify(tempFile)
                    }, function(err, res) {
                        console.log('finish restoring ' + item);
                        done(err, res);
                    });
                });
            }, function(err) {
                if (err) {
                    console.log(err);
                }
                gruntTaskDone();
            });
        });
    });
};