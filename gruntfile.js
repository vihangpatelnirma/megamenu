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
        ngtemplates: {
            app: {
                src: ['partial/*.html'],
                dest: 'dist/js/templates.js',
                options: {
                    bootstrap:  function(module, script) {
                        return script;//'define([\'angular\', \'app\'], function(angular, app) { app.run([\'$templateCache\', function($templateCache) {' + script + '}]); });';
                    }
                },
                htmlmin: {
                    collapseBooleanAttributes:      true,
                    collapseWhitespace:             true,
                    removeAttributeQuotes:          true,
                    removeComments:                 true,
                    removeEmptyAttributes:          true,
                    removeRedundantAttributes:      true,
                    removeScriptTypeAttributes:     true,
                    removeStyleLinkTypeAttributes:  true
                }
            }
        }


    });    
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('default', ['ngtemplates','concat','uglify']);
};