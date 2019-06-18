const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const minify = require('gulp-minify');
try{
	gulp.task('sass', () => {
		return gulp.src('./sass/*.sass')
		  	.pipe(sass())
		  	.pipe(cssmin())
		    .pipe(rename({suffix: '.min'}))
		  	.pipe(gulp.dest('./build'));
	});

	gulp.task('js', () => {
	  return gulp.src('./js/*.js')
	  	.pipe(minify())
	  	.pipe(gulp.dest('./build'));
	});
	gulp.task('run', () => {
	    gulp.watch('./sass/*.sass', gulp.series('sass'));
	    gulp.watch('./js/*.js', gulp.series('js'));
	});

} catch(e)	{
	console.log(e)
}
