'use strict';
module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('./package.json'),

        clean: ['dist', '.tmp'],

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            options: {
                livereload: true
            },
            app: {
                files: ['Gruntfile.js', 'dist/<%= pkg.name %>.js'],
                tasks: ['newer:jshint:all']
            },
            styles: {
                files: ['src/styles/{,*/}*.scss'],
                tasks: ['sass:dev']
            },
            livereload: {
                files: ['index.html', 'src/scripts/**/*.js'],
                tasks: ['newer:jshint:all']
            }
        },
        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('src'),
                            connect.static('dist')
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('test'),
                            connect.static('src'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            )
                        ];
                    }
                }
            }
        },
        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'src/scripts/**/*.js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/{,*/}*.js']
            }
        },

        sass: {
            dev: {
                files: {
                    '.tmp/styles/main.css': 'src/styles/main.scss'
                }
            },
            dist: {
                files: {
                    'dist/styles/main.css': 'src/styles/main.scss'
                }
            }
        },

        watchify: {
            compile: {
                src: './src/scripts/**/*.js',
                dest: '.tmp/<%= pkg.name %>.js'
            }

        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },

        copy: {
            dist: {
                src: '.tmp/<%= pkg.name %>.js', // Actual pattern(s) to match.
                dest: 'dist/<%= pkg.name %>.js' // Destination path prefix.
            }
        },

        uglify: {
            dist: {
                options: {
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n /* Version: <%= pkg.version %> */\n'
                },
                files: {
                    'dist/<%= pkg.name %>.min.js': ['.tmp/<%= pkg.name %>.js']
                }
            },
            distNG: {
                options: {
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n /* Version: <%= pkg.version %> */\n angular.module("ngBloqs", []).constant("bloqs", null).config(["$provide",function ($provide) {',
                    footer: '  }]);'
                },
                files: {
                    'dist/ng-<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        },

        release: {
            /* For more options: https://github.com/geddski/grunt-release#options */
            options: {
                additionalFiles: ['bower.json'],
                indentation: '\t', //default: '  ' (two spaces)
                commitMessage: 'Release v<%= version %>', //default: 'release <%= version %>'
                tagMessage: 'v<%= version %>', //default: 'Version <%= version %>',
                tagName: 'v<%= version %>'
            }
        },
        jsonGenerator: {
            all: {
                options: {
                    cwd: 'src/scripts/bloqs/', // Src matches are relative to this path.
                    src: '{,*/}*.js', // Actual pattern(s) to match.
                    dest: 'dist/json/', // Destination path prefix.
                    ext: '.json',
                    filter: 'isFile'
                }
            }
        }

    });

    grunt.registerMultiTask('jsonGenerator', 'Generate bloqs code into JSON format', function() {

        var opts = this.options();

        if (!this.files.length && ('cwd' in opts) && ('src' in opts) && ('dest' in opts)) {
            this.files = grunt.file.expandMapping(opts.src, opts.dest, opts);
        }

        var generate = function(source, destination) {
            var tmpObj = require('./' + source),
                obj = {};
            try {
                obj = JSON.parse(JSON.stringify(tmpObj));
            } catch (e) {
                grunt.log.error(e);
                grunt.fail.warn('Error parsing json the data.', 3);
            }
            var content = JSON.stringify(obj, null, 2);
            // Write joined contents to destination filepath.
            grunt.file.write(destination, content);
            grunt.log.writeln('File "' + destination + '" created.');
            return content;
        };

        var resume = [];
        var script = '';
        var content = null;
        this.files.forEach(function(file) {
            if (typeof(file.src) !== 'string') {
                file.src.forEach(function(source) {
                    content = generate(source, file.dest);
                    script += 'db.bitbloq_Bloqs.insert(' + content + ');\n';
                });
            } else {
                content = generate(file.src, file.dest);
                script += 'db.bitbloq_Bloqs.insert(' + content + ');\n';
            }
            resume.push(file.dest);
        });
        grunt.file.write('dist/resume.json', JSON.stringify(resume));
        grunt.log.writeln('Bloqs Resume Write in ' + 'dist/resume.json').ok();
        grunt.file.write('dist/script.json', script);
        grunt.log.writeln('Bloqs script Write in ' + 'dist/script.json').ok();

    });

    grunt.registerTask('bloqDist', ['jsonGenerator']);

    grunt.registerTask('server', ['clean', 'jshint:all', 'watchify', 'sass:dev', 'connect:livereload', 'watch']);

    grunt.registerTask('dist', ['clean', 'jshint:all', 'jsonGenerator', 'watchify', 'copy:dist', 'uglify', 'sass:dist']);

    grunt.registerTask('test', ['clean', 'jshint:all', 'watchify', 'karma']);

    grunt.registerTask('default', ['dist']);

};