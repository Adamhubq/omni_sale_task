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


	gulp.task('watch', () => {
	    console.log(3);
	    gulp.watch('./sass/*.sass', gulp.series('sass'));
	    console.log(2);
	    gulp.watch('./js/*.js', gulp.series('js'));
	    console.log('1');
	});

} catch(e)	{
	console.log(e)
}
