var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    webpack = require('gulp-webpack'),
    sync = require('run-sequence');
var webpackconfig = require('./webpack.config');

var paths = {
    js: ['client/app/**/*.js'],
    entry: 'client/app/app.js',
    root: 'client/',
    html: ['client/app/**/*.html']
};

gulp.task('watch', function(){
    console.log('watch');
    return gulp.watch(paths.js.concat(paths.html), ['webpack']);
})

//default port is 3000
var serverStarted = false;
gulp.task('server', function(done){
    console.log('server');
    return nodemon({
        script: 'server.js',
        ignore: ['node_modules/**/*.**', 'client/**/*.**', 'Gulpfile.js']
    }).on('start', function(){
        if (!serverStarted) {
            done();
            serverStarted = true;
        }
    });
});

gulp.task('webpack', function() {
    console.log('webpack');
    return gulp.src(paths.entry)
        .pipe(webpack(webpackconfig))
        .pipe(gulp.dest(paths.root)); //.pipe(reload());

})

gulp.task('default', function(done){
    sync('webpack', 'watch', 'server', done); //'browser',
});