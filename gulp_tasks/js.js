const mainBowerFiles = require('main-bower-files');
const babel = require('gulp-babel');
const cached = require('gulp-cached');
const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');

module.exports = (gulp, config, tasks) => {

  // Compile javascript
  gulp.task('js', 'Compile javascript with Babel, concat and uglify.', () => {
    let sources = [];

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
      .pipe(gulpif(config.js.babel, babel())) // all babel options handled in `.babelrc`
      .pipe(concat(config.js.destName))
      .pipe(gulpif(config.js.uglify, uglify(
        gulpif(config.js.preserveLicense, {
          preserveComments: 'license'
        }, {})
      )))
      .pipe(sourcemaps.write((config.js.sourceMapEmbed) ? null : './'))
      .pipe(gulp.dest(config.js.dest));
  });
  tasks.compile.push('js');


  // Validate using ESlint
  gulp.task('validate:js', 'Lint JS using ESlint', () => {
    let src = config.js.src;
    if (config.js.eslint.extraSrc) {
      src = src.concat(config.js.eslint.extraSrc);
    }
    return gulp.src(src)
      .pipe(cached('js'))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(gulpif(config.js.eslint.failAfterError, eslint.failAfterError()));
  });
  tasks.validate.push('validate:js');


  // Watch for changes
  gulp.task('watch:js', () => {
    let tasks = ['js'];
    if (config.js.eslint.enabled) {
      tasks.push('validate:js');
    }
    return gulp.watch(config.js.src, tasks);
  });
  tasks.watch.push('watch:js');

};
