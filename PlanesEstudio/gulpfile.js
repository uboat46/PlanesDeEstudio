// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');
var cleanCSS = require('gulp-clean-css');

// Run a Server
gulp.task('connect', function() {
  connect.server({
    root: 'dist'
  });
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/assets/scss/*.scss')
        .pipe(concat('main.scss'))
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Concatenate & Minify ExternalJS
gulp.task('libs', function() {
    return gulp.src('src/assets/libs/*.js')
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('libs.min.js'))
        .pipe(gulp.dest('dist/libs'));
});

// Concatenate & Minify AngularJS scripts
gulp.task('app', function() {
    return gulp.src('src/app/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/app'));
});

// Concatenate & Minify Component scripts
gulp.task('components', function() {
    return gulp.src('src/app/components/**/*.js')
        .pipe(concat('components.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('components.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/components'));
});

// Concatenate & Minify Service scripts
gulp.task('services', function() {
    return gulp.src('src/app/services/*.js')
        .pipe(concat('services.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('services.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/services'));
});

// Minify index html files
gulp.task('minify', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// Minify Component html files
gulp.task('views', function() {
  return gulp.src('src/app/components/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/assets/libs/*.js', ['libs']);
    gulp.watch('src/assets/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/assets/scss/*.scss', ['sass']);
    gulp.watch('src/index.html', ['minify']);
    gulp.watch('src/app/*.js', ['app']);
    gulp.watch('src/app/components/**/*.html', ['views']);
    gulp.watch('src/app/components/**/*.js', ['components']);
    gulp.watch('src/app/services/*.js', ['services']);
});

// Default Task
gulp.task('default', ['libs','lint', 'sass', 'scripts','app','views','services','components','minify','watch']);

// Run Server Task
gulp.task('build', ['connect']);


//npm rebuild node-sass --force