const gulp = require('gulp-help')(require('gulp'));
const yaml = require('js-yaml');
const fs = require('fs');
const _ = require('lodash');
const customConfigFile = './gulp-config--custom.yml';
let config = yaml.safeLoad(fs.readFileSync('./gulp-config.yml', 'utf8'));

// Load in custom config
try {
  fs.statSync(customConfigFile);
  let customConfig = yaml.safeLoad(fs.readFileSync(customConfigFile, 'utf8'));
  config = _.merge(config, customConfig);
}
catch (e) {
  console.log('Add a gulp-config--custom.yml file for any custom configuration.');
}

const tasks = {
  compile: [],
  watch: [],
  validate: [],
  default: []
};

if (config.browserSync.enabled) {
  require('./gulp_tasks/browser-sync.js')(gulp, config, tasks);
}

if (config.js.enabled) {
  require('./gulp_tasks/js.js')(gulp, config, tasks);
}

if (config.css.enabled) {
  require('./gulp_tasks/css.js')(gulp, config, tasks);
}

gulp.task('compile', 'Generate the entire site', tasks.compile);
tasks.default.unshift('compile');
gulp.task('validate', 'Validate CSS and JS by linting', tasks.validate);
gulp.task('watch', 'Watch for changes to files', tasks.watch);
tasks.default.push('watch');
gulp.task('default', 'Generate the entire site and start watching for changes', tasks.default);
