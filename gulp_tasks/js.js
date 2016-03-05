'use strict';
var mainBowerFiles = require('main-bower-files');
var cached = require('gulp-cached');
var eslint = require('gulp-eslint');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');

module.exports = function (gulp, config, tasks) {

  // Compile javascript
  gulp.task('js', 'Compile javascript, concat and uglify.', function (done) {
    var sources = [];

    // Add Bower files
    if (config.bowerFiles.enabled) {
      sources = mainBowerFiles({
        paths: {
          bowerDirectory: config.bowerFiles.dir
        },
        filter: '**/*.js'
      });
    }

    sources = sources.concat(config.js.src);

    return gulp.src(sources)
      .pipe(sourcemaps.init())
      .pipe(concat(config.js.destName))
      .pipe(gulpif(config.js.uglify, uglify(
        gulpif(config.js.preserveLicense, {
          preserveComments: 'license'
        })
      )))
      .pipe(sourcemaps.write((config.js.sourceMapEmbed) ? null : './'))
      .pipe(gulp.dest(config.js.dest));
  });
  tasks.compile.push('js');


  // Validate using ESlint
  gulp.task('validate:js', 'Lint JS using ESlint', function () {
    var src = config.js.src;
    if (config.js.eslint.extraSrc) {
      src = src.concat(config.js.eslint.extraSrc);
    }
    return gulp.src(src)
      .pipe(cached('js'))
      .pipe(eslint())
      .pipe(eslint.format());
  });
  tasks.validate.push('validate:js');


  // Watch for changes
  gulp.task('watch:js', function () {
    var tasks = ['js'];
    if (config.js.eslint.enabled) {
      tasks.push('validate:js');
    }
    return gulp.watch(config.js.src, tasks);
  });
  tasks.watch.push('watch:js');

};
