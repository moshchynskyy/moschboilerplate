const gulp = require('gulp'),
    pug = require('gulp-pug'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    rucksack = require('rucksack-css'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    // pump = require('pump'), // uglify
    svgmin = require('gulp-svgmin'),
    sourcemaps = require('gulp-sourcemaps'),
    rimraf = require('rimraf'),
    notify = require("gulp-notify"),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload; //PostCss asset


const processors = [
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
    img: 'build/img/',
    svg: 'build/svg/',
    fonts: 'build/fonts/',
    assets: 'build/external/'
  },
  src: {
    pug: 'src/templates/*.pug',
    sass: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*',
    svg: 'src/svg/**/*',
    fonts: 'src/fonts/**/*',
    assets: 'src/external/**/*',
  },
  watch: {
    pug: 'src/templates/*.pug',
    sass: 'src/sass/**/*.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*',
    svg: 'src/svg/**/*g',
    fonts: 'src/fonts/**/*',
    assets: 'src/external/**/*'
  },
  clean: './build'
};

// browser-sync
gulp.task('browser-sync', function() {
	browserSync({
        server: {
            baseDir: "./build"
        },
        tunnel: true,
        host: 'localhost',
        port: 4001,
        logPrefix: "Frontend_Mosch",
	});
});


// HTML
gulp.task('html:build', function() {
  return gulp
    .src(path.watch.pug)
    .pipe(pug())
    .on("error", notify.onError())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({stream: true}));
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
    .pipe(reload({stream: true}));
});

// CSS:PROD
gulp.task('style:prod', function() {
  return gulp
    .src('src/sass/style.scss')
    .pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
    .pipe(postcss(processors))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.css))
});

// JS
gulp.task('js:build', function() {
  return gulp
    .src(path.src.js)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({stream: true}));
});

// JS:PROD
gulp.task('js:prod', function() {
  return gulp
    .src(path.src.js)
    .pipe(babel({
        presets: ['env'] // TODO: проверить
    }))
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(uglify()) //Сожмем наш js
    .pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.js))
});

// IMAGE
gulp.task('image:build', function() {
	return gulp
        .src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

// IMAGE:PROD
gulp.task('image:prod', function() {
	return gulp
        .src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
});

// FONTS
gulp.task('font:build', function() {
  return gulp
        .src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}));
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
      .pipe(reload({stream: true}));
});

// ASSETS
gulp.task('asset:build', function() {
  return gulp
    .src(path.src.assets)
    .pipe(gulp.dest(path.build.assets))
    .pipe(reload({stream: true}));
});


// CLEAN
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});



// PROD
gulp.task('prod', ['html:build', 'style:prod', 'js:prod', 'image:prod', 'svg:build', 'font:build', 'asset:build', 'browser-sync'], function() {
    gulp.watch(path.watch.pug, ['html:build']);
    gulp.watch(path.watch.sass, ['style:prod']);
    gulp.watch(path.watch.js, ['js:prod']);
    gulp.watch(path.watch.img, ['image:prod']);
    gulp.watch(path.watch.svg, ['svg:build']);
    gulp.watch(path.watch.fonts, ['font:build']);
    gulp.watch(path.watch.assets, ['asset:build'])
});

// watch
gulp.task('watch', ['html:build', 'style:build', 'js:build', 'image:build', 'svg:build', 'font:build', 'asset:build', 'browser-sync'], function() {
  gulp.watch(path.watch.pug, ['html:build']);
  gulp.watch(path.watch.sass, ['style:build']);
  gulp.watch(path.watch.js, ['js:build']);
  gulp.watch(path.watch.img, ['image:build']);
  gulp.watch(path.watch.svg, ['svg:build']);
  gulp.watch(path.watch.fonts, ['font:build']);
  gulp.watch(path.watch.assets, ['asset:build'])
});

gulp.task('default', ['watch']);