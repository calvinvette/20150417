/*
 * npm install -g 
 * gulp 
 * gulp-uglifyjs 
 * gulp-concat 
 * gulp-less 
 * gulp-clean 
 * gulp-util 
 * gulp-rename
 * gulp-livereload
 *  
 * npm install -g gulp gulp-uglifyjs gulp-concat gulp-less gulp-clean gulp-util gulp-rename gulp-livereload
 * 
 * gulp-rimraf instead of gulp-clean
 * 
 *  
 * 
 * 
 * 
 * Asynchronous Module Definition (AMD)
 * CommonJS - RequireJS, NodeJS
 */

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var concat = require('gulp-concat');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var karma = require('karma').server;

var src = {
	css : [ 'src/**/*.css' ],
	js : [ 'src/**/*.js' ],
	bower : [ 'bower.json', '.bowerrc' ],
	all : [ 'src/**/*.css', 'src/**/*.js', 'src/**/*.html' ]
};

var dist = {
		js : ['dist/**/*.js']
};

gulp.task('uglify', function() {
	gulp.src(src.js)
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
});

gulp.task('concat', function() {
	gulp.src(dist.js)
	.pipe(concat())
	.pipe(gulp.dest('dist/js'))
});

//gulp.task('watch', function() {
//	livereload.listen();
//	gulp.watch(src.all, [ 'uglify' ]);
//});

gulp.task('test', function(done) {
	gulp.src(['!node_modules','!bower_components/**/node_modules/','bower_components/**/*.js'])
		.pipe(concat('vendor-scripts.js'))
		.pipe(gulp.dest('development'));
	gulp.src(['!node_modules/**','!**/*.test.js','!bower_components/**','**/*.js'])
		.pipe(concat('app-scripts.js'))
		.pipe(gulp.dest('development'));
	console.log('karma.start: ' + karma.start);
	return karma.start({ configFile : __dirname + '/karma.conf.js'}, done);
});

gulp.task('watch', function() {
	gulp.watch(['**/*.test.js'], ['test']);
});



