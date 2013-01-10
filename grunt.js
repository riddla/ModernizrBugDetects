/*global module */
module.exports = function( grunt ) {
    'use strict';

    grunt.initConfig({
        qunit: {
            files: [
                'test/index.html',
                'test/modernizr_v3.html'
            ]
        },
        lint: {
            files: [
                'grunt.js',
                'bug-detects/*.js'
            ]
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'lint'
        },
        jshint: {
            options: {
                boss: true,
                browser: true,
                curly: false,
                devel: true,
                eqeqeq: false,
                eqnull: true,
                expr: true,
                evil: true,
                immed: false,
                laxcomma: true,
                newcap: false,
                noarg: true,
                smarttabs: true,
                sub: true,
                undef: true
            },
            globals: {
                Modernizr: true
            }
        }
    });

    grunt.registerTask('default', 'lint');
};