'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gulpMocha = require('gulp-mocha');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 4000
        },
        ignore: ['./node_modules/**']
    })
        .on('restart', function () {
            console.log('server restarted');
        });
});

gulp.task('test', function () {
    gulp.src('test/*.js', {
        read: false
    })
        .pipe(gulpMocha({
            reporter: 'nyan'
        }))
})