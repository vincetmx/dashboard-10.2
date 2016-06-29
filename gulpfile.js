//require gulp
var gulp = require ('gulp');

//require other packages
var sass= require('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');


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



