"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var imagemin = require("gulp-imagemin");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var svgmin = require("gulp-svgmin");
var svgstore = require("gulp-svgstore");
var cleanCSS = require("gulp-clean-css");
var gcmq = require("gulp-group-css-media-queries");
var sourcemaps = require("gulp-sourcemaps");
var csscomb = require("gulp-csscomb");
var sass = require("gulp-sass");
var livereload = require("gulp-livereload");

function style() {
  return gulp
    .src("./src/style/style.scss")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      postcss([
        autoprefixer({
          browsers: ["last 2 versions", "Safari >= 8"],
          cascade: false
        })
      ])
    )
    .pipe(gcmq())
    .pipe(csscomb())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("src/css"))
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("src/css"))
    .pipe(livereload());
}

function images() {
  return gulp
    .src("build/media/img/**/*.{png,jpg,gif}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.jpegtran({ progressive: true })
      ])
    )
    .pipe(gulp.dest("build/static/media"));
}

function serve() {
  livereload.listen();
  gulp.watch("src/style/**/*.scss", { usePolling: true }).on("change", style);
}

let runwatch = gulp.series(style, serve);
gulp.task("run", runwatch);
gulp.task("style", style);
gulp.task("images", images);
