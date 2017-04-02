'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
var paths = {
  scss:['./scss/main.scss'],
  pug:['./*.pug']
};

gulp.task('views', function buildHTML() {
   return gulp.src('./*.pug')
    .on('data',function(file){
        console.log({
            relative: file.relative,
            contents: file.contents
        })
    })
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
done();
});


/*
gulp.task('views', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
});
*/