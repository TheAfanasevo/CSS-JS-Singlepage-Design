const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', async function() {
    await gulp.src('./style.css')
        .pipe(autoprefixer({
            browsers: ["> 0%"],
            cascade: false
        }))
        .pipe(gulp.dest('build'));
});