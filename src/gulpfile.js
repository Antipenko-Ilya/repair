const gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(cb) {
    console.log('Задача выполнена');
    cb();
}

gulp.task()