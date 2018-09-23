const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');

gulp.task('sass', () =>
  gulp.task('sass', () =>
    gulp.src('./**/css/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./'))
  )
);

gulp.task('default', ['sass'], () => {
  gulp.watch('./**/css/*.sass', ['sass']);
});
