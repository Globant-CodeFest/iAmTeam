module.exports = function (grunt) {

    grunt.initConfig({
        uglify: {
            controllers: {
                src: [
                    'src/**/*.controller.js',
                ],
                dest: 'dist/controllers/controllers.min.js'
            }, //controllers

            services: {
                src: [
                    'src/**/*.service.js',
                    'src/*.service.js',
                ],
                dest: 'dist/services/services.min.js'
            },

            modules: {
                src: [
                    'src/**/*.module.js',
                ],
                dest: 'dist/modules/modules.min.js'
            },
        },
        watch: {
            options: {
                interrupt: true,
                debounceDelay: 250,
                // reload: true,
                livereload: true
            },
            scripts: {
                files: [
                ],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            }, //scripts
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    './dist/**/*',
                    './src/**/**/*.html',
                    '../psnodejs/api/**/*',
                    '../psnodejs/api/**/**/*'
                ]
            },
        }, //watch

        concat: {
            controllers: {
                src: [
                    'src/**/*.controller.js',
                ],
                dest: 'dist/controllers/controllers.min.js'
            }, //controllers

            services: {
                src: [
                    'src/**/*.service.js',
                    'src/*.service.js',
                ],
                dest: 'dist/services/services.min.js'
            },

            modules: {
                src: [
                    'src/**/*.module.js',
                ],
                dest: 'dist/modules/modules.min.js'
            },
        },
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.task.registerTask('uglifyAll', ['uglify']);
    grunt.task.registerTask('development', ['concat']);
    grunt.task.registerTask('start', ['uglify','watch']);
    grunt.registerTask('default', ['watch', 'concat']);
    grunt.registerTask('prod', ['watch', 'uglify']);
    //grunt.registerTask('server', ['express', 'watch']);
};
