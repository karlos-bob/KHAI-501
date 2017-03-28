var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');



gulp.task('sass', function () {
   return gulp.src('sass/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('css'))
       .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: './'},
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});