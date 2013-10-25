'use strict';

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('time-grunt')(grunt);

    grunt.initConfig({
        yeoman: {
            dist: 'dist'
        },
        clean: ['<%= yeoman.dist %>/*'],
        bower: {
            install: {
                options: {
                    targetDir: 'dependencies',
                    cleanTargetDir: true
                }
            }
        },
        exec: {
            vulcan: {
              command: 'node tools/vulcanize/vulcanize --csp -i elements/mobile-ui-elements.html -o <%= yeoman.dist %>/mobile-ui-elements.html',
              stdout: true,
              stderr: true
            }
        },
    });

    grunt.registerTask('build', [
        'clean',
        'bower'
    ]);

    grunt.registerTask('default', ['build']);
};