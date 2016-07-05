var gulp = require('gulp');
var clean=require('gulp-clean');
var imgmin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var sasscompile = require('gulp-sass');

gulp.task('default', function() {

});

//sass task
gulp.task('sass', function() {
    return gulp.src('./assets/sass/*.scss')
        .pipe(sasscompile())
        .pipe(gulp.dest('./assets/styles/'));
});

//imagemin task
gulp.task('imagemin', function() {
    return gulp.src('./assets/images/src/**/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./assets/images/build/'));
});

//clean task
gulp.task('clean', function(){
	return gulp.src('./assets/images/build/', {read: false})
		.pipe(clean());
});

//jshint task
gulp.task('jshint',function(){
	 return gulp.src(['./scripts/*.js','./scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish', {beep: true}));
});

//watch task
gulp.task('watch', function() {
  gulp.watch('./scripts/*.js', ['jshint']);
  gulp.watch('./scripts/**/*.js', ['jshint']);
  gulp.watch('./assets/images/src/**/*',['imagemin']);
  gulp.watch('./assets/sass/*.scss',['sass']);
});