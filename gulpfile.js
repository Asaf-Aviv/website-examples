const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () =>
  gulp.task('sass', () =>
    gulp.src('./**/css/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./'))
  )
);

gulp.task('default', ['sass'], () => {
  gulp.watch('./**/css/*.sass', ['sass']);
});
