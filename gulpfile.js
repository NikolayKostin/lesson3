'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
var googlecdn = require('gulp-google-cdn');
var clean = require('gulp-clean');

var bower = require('main-bower-files');
var bowerNormalizer = require('gulp-bower-normalize');

var mainBowerFiles = require('gulp-main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpFilter = require('gulp-filter');

var paths = {
  scss:['./scss/main.scss'],
  pug:['./*.pug']
};

gulp.task('clean', function(done) {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
    done();
});

//очистка bower libs
gulp.task('cleanBW', function(done) {
    return gulp.src('./libs', {read: false})
        .pipe(clean());
    done();
});

// Fonts
gulp.task('fonts', function() {
    return gulp.src([
                    '../bower_components/font-awesome/fonts/fontawesome-webfont.*'])
            .pipe(gulp.dest('dist/fonts/'));
});

//сборка html
gulp.task('views', function buildHTML(done) {
   return gulp.src('./views/*.pug')
    .on('data',function(file){
        //console.log({ relative: file.relative, contents: file.contents })
    })
        .pipe(pug({
          pretty: true
        }))
        .pipe(gulp.dest('./dist'));
done();
});

//сборка css
gulp.task('scss', function () {
 return gulp.src('./scss/main.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/css'));
   done();
});

gulp.task('build', gulp.parallel('views','scss','fonts',function(done){
    done();
}));

gulp.task('build:watch',function(){
    gulp.watch(paths.pug,gulp.series('pug'));
    gulp.watch(paths.scss,gulp.series('scss'));
    
});