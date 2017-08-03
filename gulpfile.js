const gulp = require('gulp'),
      sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      browserify = require('browserify'),
      buffer = require('vinyl-buffer'),
      cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('minify-css', () => {
  return gulp.src('public/scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('browserify', () => {
  return gulp.src(['public/javascripts/app.js',
                   'public/javascripts/services/auth-interceptor.js',
                   'public/javascripts/services/post-service.js',
                   'public/javascripts/controllers/nav-controller.js',
                   'public/javascripts/controllers/post-controller.js',
                   'public/javascripts/controllers/user-controller.js'])
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));
});

gulp.task('default', ['browserify', 'minify-css']);

gulp.watch(['public/javascripts/**/*.js', 'public/scss/*.scss'], ['default']);
