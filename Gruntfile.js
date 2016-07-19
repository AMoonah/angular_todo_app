module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        concat: {
            options: {
                separator: ''
            },
            angular_seed: {
                src: ['src/assets/js/angularSeedModule.js', 'src/assets/js/**/*.js'],
                dest: 'build/assets/angular-seed.js'
            }
        },
        concat_css: {
            all: {
                src: ["src/assets/css/**/*.css"],
                dest: 'build/assets/angular-seed.css'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.json'],
                        dest: 'build/assets'
                    },
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.html'],
                        dest: 'build'
                    }
                ]
            }
        },
        watch: {
            files: ['src/**/*.js', 'src/**/*.html', 'src/**/*.css', 'src/**/*.json'],
            tasks: ['concat', 'concat_css', 'copy']
        },
        bower_concat: {
            all: {
                dest: {
                    js: 'build/assets/libs.js',
                    css: 'build/assets/libs.css'
                },
                exclude: [],
                bowerOptions: {
                    relative: false
                },
                mainFiles: {
                    bootstrap: ['dist/css/bootstrap.css', 'dist/js/bootstrap.js']
                },
                dependencies: {
                    'bootstrap': 'jquery',
                    'angular': 'jquery'
                }
            }
        },
        'http-server': {
            dev: {
                root: 'build',
                port: 9000,
                host: 'localhost',
                showDir: true,
                autoIndex: true,
                ext: 'html',
                runInBackground: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-http-server');
    grunt.registerTask('default', ['clean', 'concat', 'concat_css', 'bower_concat', 'copy', 'http-server', 'watch']);
};
