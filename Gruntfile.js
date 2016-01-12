'use strict';
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/scripts/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        buildBloqs: {
            all: {
                options: {
                    cwd: 'src/scripts/bloqs/', // Src matches are relative to this path.
                    src: ['**/*.js', '!build-utils.js'], // Actual pattern(s) to match.
                    dest: 'dist/bloqs/', // Destination path prefix.
                    ext: '.json',
                    filter: 'isFile'
                }
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dist: {
                files: {
                    'dist/bloqs.css': 'src/styles/main.scss'
                }
            }
        },
        clean: {
            dist: ['dist'],
            i18n: ['i18n']
        },
        watch: {
            scripts: {
                files: ['src/styles/**/*.scss', 'src/scripts/bloqs/**/*.*'],
                tasks: ['sass', 'bloqDist'],
                options: {
                    spawn: false,

                    livereload: {
                        host: 'localhost',
                        port: 9000,
                    }
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.loadTasks('tasks');

    grunt.registerMultiTask('buildBloqs', 'Generate bloqs code into JSON format', function() {

        var opts = this.options();

        if (!this.files.length && ('cwd' in opts) && ('src' in opts) && ('dest' in opts)) {
            this.files = grunt.file.expandMapping(opts.src, opts.dest, opts);
        }
        var bloqsList = [],
            bloqsMap = {};

        var generate = function(source, destination) {

            var tmpObj = require('./' + source),
                obj = {};

            try {
                obj = JSON.parse(JSON.stringify(tmpObj));
                bloqsMap[tmpObj.name] = tmpObj;
                bloqsList.push(tmpObj);
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


        var script = 'db.bitbloq_Bloqs.remove({});\n';
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
        grunt.file.write('dist/list.json', JSON.stringify(bloqsList));
        grunt.log.writeln('Bloqs JSON list Write in ' + 'dist/list.json').ok();
        grunt.file.write('dist/bloqsmap.json', JSON.stringify(bloqsMap));
        grunt.log.writeln('Bloqs JSON MAP Write in ' + 'dist/bloqsmap.json').ok();

    });


    grunt.registerTask('bloqDist', ['buildBloqs']);
    grunt.registerTask('default', [
        'clean:dist',
        'bloqDist',
        'uglify',
        'sass'
    ]);
};