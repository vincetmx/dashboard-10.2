//require gulp
var gulp = require ('gulp');

//require other packages
var sass= require('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');



//default task, currently will do nothing
gulp.task('default',function(){
    
});


//first task: sass, to convert scss to css 
gulp.task('sass',function(){
    return gulp.src('./app/assets/sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false 
    }))
    .pipe(gulp.dest('./app/assets/styles/'))
});



//second task: image minify
gulp.task('imagemin', function(){
    return gulp.src('./app/assets/images/src/*/*.*')
    .pipe(imagemin({
 
    }))
    //only for the ones that are
//changing from the destination folder
    .pipe(changed('./app/assets/images/build/'))  
    .pipe(gulp.dest('./app/assets/images/build/'))
});



//third tastk: clean the folder
gulp.task ('clean', function(){
    return gulp.src('./app/assets/images/build', {read:false})
    .pipe(clean());
});



//fourth task: JS stylish reporters
gulp.task('jshint', function(){
    return gulp.src('./app/scripts/*/*.js')
    .pipe(jshint())
//with stylish reporters
    .pipe(jshint.reporter(stylish))
// break the task when there is error
    .pipe(jshint.reporter('fail'))
});



//fifth task: watch
gulp.task('watch',function(){
    gulp.watch('./app/assets/sass/*.scss',['sass']);
    gulp.watch('./app/assets/images/src/*/*.*',['imagemin']);
});