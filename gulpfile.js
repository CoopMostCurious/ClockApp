var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('app/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: '/Users/cooper/Desktop/digitalClock/app'
        },
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/**/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});