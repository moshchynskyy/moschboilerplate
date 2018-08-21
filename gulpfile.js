var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cache = require('gulp-cache'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    cssnano = require('cssnano'), //PostCss asset
    rucksack = require('rucksack-css'), //PostCss asset
    autoprefixer = require('autoprefixer'), //PostCss asset
    // browserSync = require('browser-sync'),
    webserver = require('gulp-webserver'),
    notify = require('gulp-notify'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    babel = require('gulp-babel'),
    cleanCSS = require('gulp-clean-css'),
    minifyjs = require('gulp-js-minify'),
    prettify = require('gulp-prettify'),
    svgmin = require('gulp-svgmin');

  var processors = [
    autoprefixer({ browsers: ['last 15 versions'] }),
    rucksack ({
        fallbacks: true // for old browsers
    })
  ];

const path = {
  build: {
    html: 'build/',
    css: 'build/css/',
    js: 'build/js/',
    img: 'build/images/',
    svg: 'src/images/svg/*.svg',
    fonts: 'build/fonts/',
    assets: 'build/external/'
  },
  src: {
    pug: 'src/templates/*.pug',
    sass: 'src/sass/**/*.scss',
    js: 'src/js/*.js',
    img: 'src/images/*.*',
    svg: 'src/images/svg/*.svg',
    fonts: 'src/fonts/**/*',
    assets: 'src/external/**/*',
  },
  watch: {
    pug: 'src/templates/*.pug',
    sass: 'src/sass/**/*.scss',
    js: 'src/js/*.js',
    img: 'src/images/*.*',
    svg: 'src/images/svg/*.svg',
    fonts: 'src/fonts/**/*',
    assets: 'src/external/**/*'
  },
  clean: './build'
};

// webserver
gulp.task('webserver', function() {
    gulp.src('build')
        .pipe(webserver({
            livereload: true,
            port: 7900,
            // directoryListing: true,
            open: true
        }));
});

// browser-sync
// gulp.task('browser-sync', function() {
// 	browserSync({
// 		server: {
// 			baseDir: 'build'
// 		},
// 		notify: false
// 	});
// });


// HTML
gulp.task('html:build', function() {
  return gulp
    .src(path.watch.pug)
    // .pipe(rigger())
    .pipe(pug({ pretty: true }))
    .on("error", notify.onError())
    .pipe(prettify({ indent_size: 4 }))
    .pipe(gulp.dest(path.build.html))
    // .pipe(browserSync.reload({stream: true}));
});


// CSS
gulp.task('style:build', function() {
  return gulp
    .src('src/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    // .pipe(browserSync.reload({stream: true}));
});
// CSS:PROD
gulp.task('style:prod', function() {
  return gulp
    .src('src/sass/style.scss')
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    .pipe(postcss(processors))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.css))
    // .pipe(browserSync.reload({stream: true}));
});


// JS
gulp.task('js:build', function() {
  return gulp
    .src(path.src.js)
    .pipe(gulp.dest(path.build.js))
    // .pipe(browserSync.reload({stream: true}));
});
// JS:PROD
gulp.task('js:prod', function() {
  return gulp
    .src(path.src.js)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(minifyjs())
    .pipe(gulp.dest(path.build.js))
});


// IMAGE
gulp.task('image:build', function() {
	return gulp
    .src('src/images/*.*')
  	.pipe(gulp.dest(path.build.img))
});
// IMAGE:PROD
gulp.task('image:prod', function() {
	return gulp
    .src('src/images/**/*')
    .pipe(cache(imagemin({
      use: [pngquant({ quality: '75' })],
      progressive: true
    })))
  	.pipe(gulp.dest(path.build.img))
});


// FONTS
gulp.task('font:build', function() {
  return gulp
    .src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});


// SVG
gulp.task('svg:build', function() {
  return gulp
      .src(path.src.svg)
      .pipe(svgmin({
          js2svg: {
              pretty: true
          }
      }))
      .pipe(gulp.dest(path.build.svg))
});


// ASSETS
gulp.task('asset:build', function() {
  return gulp
    .src(path.src.assets)
    .pipe(gulp.dest(path.build.assets))
});


// CLEAN
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});


// PROD
gulp.task('prod', ['html:build', 'style:prod', 'js:prod', 'image:prod', 'font:build', 'asset:build', 'webserver'/*'browser-sync'*/], function() {
    gulp.watch(path.watch.pug, ['html:build']);
    gulp.watch(path.watch.sass, ['style:build']);
    gulp.watch(path.watch.js, ['js:build']);
    gulp.watch(path.watch.img, ['image:build']);
    gulp.watch(path.watch.fonts, ['font:build']);
    gulp.watch(path.watch.assets, ['asset:build'])
});


// watch
gulp.task('watch', ['html:build', 'style:build', 'js:build', 'image:build', 'font:build', 'asset:build', 'webserver'/*'browser-sync'*/], function() {
  gulp.watch(path.watch.pug, ['html:build']);
  gulp.watch(path.watch.sass, ['style:build']);
  gulp.watch(path.watch.js, ['js:build']);
  gulp.watch(path.watch.img, ['image:build']);
  gulp.watch(path.watch.fonts, ['font:build']);
  gulp.watch(path.watch.assets, ['asset:build'])
});


gulp.task('default', ['watch']);