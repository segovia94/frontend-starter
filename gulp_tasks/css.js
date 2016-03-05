'use strict';
var mainBowerFiles = require('main-bower-files');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var postcss = require('gulp-postcss');
var cached = require('gulp-cached');
var autoprefixer = require('autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

module.exports = function (gulp, config, tasks) {

  function cssCompile(done) {
    gulp.src(config.css.src)
      .pipe(sassGlob())
      .pipe(plumber({
        errorHandler: function (error) {
          notify.onError({
            title: 'CSS <%= error.name %> - Line <%= error.line %>',
            message: '<%= error.message %>'
          })(error);
          this.emit('end');
        }
      }))
      .pipe(sourcemaps.init({
        debug: config.debug
      }))
      .pipe(sass({
        outputStyle: config.css.outputStyle,
        sourceComments: config.css.sourceComments,
        includePaths: config.bowerFiles.includePaths
      }).on('error', sass.logError))
      .pipe(postcss(
        [
          autoprefixer({
            browsers: config.css.autoPrefixerBrowsers
          })
        ]
      ))
      .pipe(sourcemaps.write((config.css.sourceMapEmbed) ? null : './'))
      .pipe(gulpif(config.css.flattenDestOutput, flatten()))
      .pipe(gulp.dest(config.css.dest))
      .on('end', function () {
        done();
      });
  }

  // Compile Sass
  gulp.task('sass', 'Compile Sass to CSS using Libsass with Autoprefixer and SourceMaps', cssCompile);
  tasks.compile.push('sass');


  // Vendor compile
  gulp.task('css:vendor', 'Compile all vendor css into a single file', function () {
    var sources = [];

    // Add Bower files
    if (config.bowerFiles.enabled) {
      sources = mainBowerFiles({
        paths: {
          bowerDirectory: config.bowerFiles.dir
        },
        filter: '**/*.css'
      });
    }

    sources = sources.concat(config.css.vendor);

    return gulp.src(sources)
      .pipe(concat('vendor.css'))
      .pipe(gulpif(config.css.outputStyle === 'compressed', cssnano()))
      .pipe(gulp.dest(config.css.dest));
  });
  tasks.compile.push('css:vendor');


  // Validate with Lint
  gulp.task('validate:css', 'Lint Sass files', function () {
    var src = config.css.src;
    if (config.css.lint.extraSrc) {
      src = src.concat(config.css.lint.extraSrc);
    }
    return gulp.src(src)
      .pipe(cached('validate:css'))
      .pipe(sassLint())
      .pipe(sassLint.format())
      .pipe(gulpif(config.css.lint.failOnError, sassLint.failOnError()));
  });
  tasks.validate.push('validate:css');


  // Watch for changes
  gulp.task('watch:css', function () {
    var tasks = ['sass'];
    if (config.css.lint.enabled) {
      tasks.push('validate:css');
    }
    return gulp.watch(config.css.src, tasks);
  });
  tasks.watch.push('watch:css');

};
