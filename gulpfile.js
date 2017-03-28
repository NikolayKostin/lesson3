'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const jade = require('gulp-jade');
const notify = require('gulp-notify');

gulp.task('jade',function(done){
   gulp.src('index.jade')
    .on('data',function(file){
        console.log({
            relative: file.relative,
            contents: file.contents
        })
    })
        .pipe(jade())
        .pipe(gulp.dest('./dist'));
done();
});