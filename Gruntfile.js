'use strict';
module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        pkg: grunt.file.readJSON('./package.json'),
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['src/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            // styles: {
            //     files: ['src/styles/{,*/}*.css'],
            //     tasks: ['newer:copy:styles', 'autoprefixer']
            // },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'index.html'
                ]
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
                            connect.static('.'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            )
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect.static('src'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            )
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    middleware: function(connect) {
                        return [
                            connect.static('dist'),
                            connect.static('demo')
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
                    'src/{,*/}*.js'
                ]
            },
            test: {
                src: ['test/spec/{,*/}*.js']
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['index.html'],
                ignorePath: /\.\.\//
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        // useminPrepare: {
        //     html: '<%= yeoman.app %>/index.html',
        //     options: {
        //         dest: '<%= yeoman.dist %>',
        //         flow: {
        //             html: {
        //                 steps: {
        //                     js: ['concat', 'uglify'],
        //                     css: ['cssmin']
        //                 },
        //                 post: {}
        //             }
        //         }
        //     }
        // },

        // // Performs rewrites based on filerev and the useminPrepare configuration
        // usemin: {
        //     html: ['<%= yeoman.dist %>/{,*/}*.html'],
        //     css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
        //     options: {
        //         assetsDirs: [
        //             '<%= yeoman.dist %>',
        //             '<%= yeoman.dist %>/images/{,**}',
        //             '<%= yeoman.dist %>/styles'
        //         ]
        //     }
        // },


        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        },

        concat: {
            dist: {
                options: {
                    // Replace all 'use strict' statements in the code with a single one at the top
                    stripBanners: true,
                    banner: '"use strict";\n',
                    process: function(src, filepath) {
                        return '// Source: ' + filepath + '\n' +
                            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    },
                },
                files: {
                    'dist/bloqs.js': ['src/utils.js', 'src/bloq.js', 'src/outputBloq.js', 'src/statementBloq.js', 'src/statementInputBloq.js', 'src/projectBloq.js', 'res/basic_bloqs.js', 'src/build/default.js'],
                },
            },
        }
    });

    grunt.registerTask('prepareServer', 'Prepare dev web server', [
        // 'clean:server',
        'jshint:all',
        'wiredep'
    ]);

    grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {

        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'prepareServer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('dist', ['jshint:all', 'concat', 'uglify']);
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['dist']);

};
