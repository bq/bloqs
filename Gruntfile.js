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
            dev: {
                files: ['bower.json', 'Gruntfile.js'],
                tasks: ['newer:jshint:all']
            },
            app: {
                files: 'dist/<%= pkg.name %>.js',
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['src/styles/{,*/}*.scss'],
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: ['index.html']
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
            // dist: {
            //     options: {
            //         open: true,
            //         middleware: function(connect) {
            //             return [
            //                 connect.static('dist'),
            //                 connect.static('demo')
            //             ];
            //         }
            //     }
            // }
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
                src: './src/**/*.js',
                dest: 'dist/<%= pkg.name %>.js'
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
                banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n /* Version:<%= pkg.version %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        }

    });

    grunt.registerTask('compile', ['jshint:all', 'watchify']);
    grunt.registerTask('server', ['compile', 'connect:livereload', 'sass:dev', 'watch']);

    grunt.registerTask('dist', ['compile', 'uglify', 'sass:dist']);
    // grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['dist']);

};