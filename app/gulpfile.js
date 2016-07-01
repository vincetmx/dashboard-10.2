var gulp = require('gulp');
var clean=require('gulp-clean');
var imgmin = require('gulp-imagemin');
// var jshint = require('gulp-jshint');
var sasscompile = require('gulp-sass');

gulp.task('default', function() {

});

gulp.task('sass', function() {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sasscompile())
        .pipe(gulp.dest('./assets/styles/'));
});

gulp.task('imagemin', function() {
    return gulp.src('./assets/images/src/**/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./assets/images/build/'));
});

gulp.task('clean', function(){
	return gulp.src('./assets/images/build/', {read: false})
		.pipe(clean());
});

// gulp.task('jshint',function(){
// 	 return gulp.src('./scritps/controllers/work.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
// });