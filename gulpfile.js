var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var del = require('del');

gulp.task('clean-js', function () {
  return del(['dist/js/*.js']);
});

gulp.task('clean-css', function () {
  return del(['dist/css/*.css']);
});

gulp.task('pack-js', gulp.series('clean-js', function() {
  return gulp.src(['src/js/vendor/*.js',
    'src/js/data.js', 'src/js/viewmodel.js',
    'src/js/classes.js'])
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext:{
        min:'.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dist/js'));
}));

gulp.task('pack-css', gulp.series('clean-css', function () {
	return gulp.src(['src/css/style.css'])
		.pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
		.pipe(gulp.dest('dist/css'));
}));


gulp.task('default', gulp.parallel('pack-js', 'pack-css'));
