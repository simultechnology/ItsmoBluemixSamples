var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('watch', ['copy'], function() {

  return gulp.watch('src/**', ['copy']);
});

gulp.task('copy', function() {
  //src/jsディレクトリ以下のファイルをコピー
  return gulp.src('src/**')
    .pipe(gulp.dest('dist'));

});

gulp.task('webserver', ['watch'], function() {
  gulp.src('dist')
    .pipe(webserver({
      port: 2555,
      livereload: true,
      directoryListing: {
        enable: true,
        path: 'dist'
      },
      open: true
    }));
});

gulp.task('default', ['copy', 'watch', 'webserver']);
