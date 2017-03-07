'use strict';

var gulp    = require('gulp');
var config  = require('../config');
var helpers = require('../helpers');

var sass = require('gulp-sass');

var groupcssmediaqueries = require('gulp-group-css-media-queries');
var minify = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');


gulp.task('main:styles', function() {
  return gulp.src('src/assets/styles/main.scss')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'iOS 8'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(groupcssmediaqueries({ log: true }))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.directories.dist.styles))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('vendor:styles', function() {
  return gulp.src('src/assets/styles/vendor.scss')
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: config.vendor.scssDirectories
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'iOS 8'],
      cascade: false
    }))
    .pipe(gulp.dest(config.directories.dist.styles))
    .pipe(groupcssmediaqueries({ log: true }))
    .pipe(minify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.directories.dist.styles))
    .pipe(browserSync.reload({stream:true}));
});
