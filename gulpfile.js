const gulp = require('gulp');
const banner = require('gulp-banner');
const uglify = require('gulp-uglifyjs');
const package = require('./package.json');

var header = [
'/*!',
	' * ' + package.title + ' v' + package.version,
	' * ' + package.homepage, 
	' * Released under the MIT License.',
' */\n'
].join('\n');

gulp.task('default', function(){
	gulp.src(package.main)
    .pipe(uglify( package.main.split('/')[2].replace('.js', '.min.js') ))
    .pipe(banner(header, {
        pkg: package
    }))
    .pipe(gulp.dest('dist'));
});