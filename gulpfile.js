var 
	gulp 			= require('gulp'),
	jshint 		= require('gulp-jshint'), 
	concat 		= require('gulp-concat'),
	compass 	= require('gulp-compass'),
	rename	 	= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),

	script = {
		src : 'src/**/*.js',
		dest : 'dest/'
	};

/**
	JSHint Task
*/
gulp.task('jshint', function() {
  	gulp.src( script.src )
  		.pipe( jshint('.jshintrc') )
  		.pipe( jshint.reporter('default') );
});

/**
	Concat & Minify Task
*/
gulp.task('compress', function() {
	/* Gera o arquivo JS concatenado */
  	gulp.src( script.src )
  		.pipe( concat( 'realtime-cli.js' ) )
  		.pipe( gulp.dest( script.dest ) )

 		.pipe( uglify() )
 		.pipe( rename('realtime-cli.min.js') )
 		.pipe( gulp.dest( script.dest ) );
});

/**
	WATCH Task
*/
gulp.task('watch', function() {
  gulp.watch( [script.src], ['jshint','compress'] );
});
