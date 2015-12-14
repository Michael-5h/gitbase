module.exports = function(grunt) {
    grunt.initConfig({
        
        jshint: {
            files: [
                'Gruntfile.js', 
                'javaScriptStudy/*.js', 
                'html5_and_css3/*.js'
            ],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['> 0%']
            },
            highLightButton: {
                files: [{
                    expand: true,
                    cwd: 'highLightButton/',
                    src: '{,*/}*.css',
                    dest: 'highLightButton/'
                }]
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['highLightButton/**/*.css', 'highLightButton/highLightButton.html']
                },
                options: {
                    server: {
                        baseDir: "highLightButton",
                        index: "highLightButton.html"
                    }
                }
            }
        },

        watch: {
            scripts: {
                files: 'highLightButton/**/*.js',
                tasks: ['jshint']
            },
            sass: {
                files: 'highLightButton/**/*.scss',
                tasks: ['sass']
            },
        },

        sass: {                              
            dist: {
                files: [{    
                    expand: true,                    
                    cwd: 'highLightButton/scss',
                    src: ['*.scss'],
                    dest: 'highLightButton/css',
                    ext: '.css'       
                }]
            }
        }
    });  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer'); 
    //order attention(in case of coverage)
    grunt.registerTask('javaScriptStudy', ['jshint']);
    grunt.registerTask('highLightButton', ['browserSync', 'watch']);
    grunt.registerTask('prefixed', ['autoprefixer']);
    grunt.registerTask('default', ['jshint']);

};