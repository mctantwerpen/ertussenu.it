'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

gulp.task('sass', function () {
  gulp.src('./sass/*.scss')
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(['sass/*.scss'], ['sass']);
});