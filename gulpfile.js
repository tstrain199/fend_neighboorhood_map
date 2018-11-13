var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var del = require('del');

gulp.task('pack-js', ['clean-js'], function() {
  return gulp.src(['assets/js/vendor/*.js', 'assets/js/viewmodel.js',
    'assets/js/classes.js', 'assets/js/data.js'])
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext:{
        min:'.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', ['clean-css'], function () {
	return gulp.src(['assets/css/style.css'])
		.pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
		.pipe(gulp.dest('public/build/css'));
});

gulp.task('clean-js', function () {
  return del(['public/build/js/*.js']);
});

gulp.task('clean-css', function () {
  return del(['public/build/css/*.css']);
});

gulp.task('default', ['pack-js', 'pack-css']);
