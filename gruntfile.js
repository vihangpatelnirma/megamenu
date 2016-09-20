module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
          options: {
            mangle: false,
            compress: {
              drop_console: true
            }
          },
          main: {
            files: {
              'dist/js/built.min.js': ['dist/js/templates.js','dist/js/built.js']
            }
          }
        },
        concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: ['main.js','js/*.js'],
            dest: 'dist/js/built.js',
          },
        },
        jst: {
          compile: {
            options: {
              templateSettings: {
                interpolate: /\{\{(.+?)\}\}/g
              }
            },
            files: {
              'dist/js/templates.js': ['partial/*.html']
            }
          }
        }


    });    
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jst');

    grunt.registerTask('default', ['jst','concat','uglify']);
};