'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gulpStylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');

/**
 * Asset paths.
 */
const srcSCSS = 'scss/**/*.scss';
const srcJS = 'js/*.js';
const assetsDir = '../assets/';

/**
 * Scss lint
 */
gulp.task('stylelint', () => {
    return gulp.src(srcSCSS)
        .pipe(gulpStylelint({
          reporters: [
            {formatter: 'string', console: true}
          ],
          fix: true
        }));
});

/**
 * SCSS task
 */
gulp.task('scss', gulp.series('stylelint', () => {
    return gulp.src('scss/theme.scss.liquid')
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer({ cascade : false }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('theme.min.css.liquid'))
        .pipe(gulp.dest(assetsDir));
}));

/**
 * JS task
 *
 * Note: use npm to install libraries and add them below, like the babel-polyfill example
 */
const jsFiles = [
    // './node_modules/babel-polyfill/dist/polyfill.js',
    srcJS,
];

gulp.task('js', () => {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('theme.js'))
        .pipe(gulp.dest(assetsDir))
        .pipe(rename('theme.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(assetsDir));
});

/**
 * Images task
 */
gulp.task('images', () => {
    return gulp.src('image/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Fonts task
 */
gulp.task('fonts', () => {
    return gulp.src('font/**')
        .pipe(changed(assetsDir)) // ignore unchanged files
        .pipe(gulp.dest(assetsDir))
});

/**
 * Watch task
 */
gulp.task('watch', () => {
    gulp.watch(srcSCSS, gulp.series('scss'));
    gulp.watch(srcJS, gulp.series('js'));
    gulp.watch('image/*.{jpg,jpeg,png,gif,svg}', gulp.series('images'));
    gulp.watch('font/*.{eot,svg,ttf,woff,woff2}', gulp.series('fonts'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('scss', 'js', 'images', 'fonts'));
