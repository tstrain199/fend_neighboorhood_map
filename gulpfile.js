var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var del = require('del');

gulp.task('clean-js', function () {
  return del(['public/build/js/*.js']);
});

gulp.task('clean-css', function () {
  return del(['public/build/css/*.css']);
});

gulp.task('pack-js', gulp.series('clean-js', function() {
  return gulp.src(['assets/js/vendor/*.js',
    'assets/js/data.js', 'assets/js/viewmodel.js',
    'assets/js/classes.js'])
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext:{
        min:'.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('public/build/js'));
}));

gulp.task('pack-css', gulp.series('clean-css', function () {
	return gulp.src(['assets/css/style.css'])
		.pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
		.pipe(gulp.dest('public/build/css'));
}));


gulp.task('default', gulp.parallel('pack-js', 'pack-css'));
