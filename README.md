# Frontend Setup

This repository is meant as a one-time starterkit when creating a new web project. It offers default Sass folder
structure which will be compiled with Gulp.

### Prerequesites

You'll need [node.js](http://nodejs.org).

## Install and setup

After cloning and changing into that directory, run this to install dependencies.

```
$ npm install
```

You may have to run that again for updates; so it may be wise to save this: `$ npm install`. **If you
have any problems; this is the first thing to run.**

Finally, to do an initial build of the site and start watching for changes run:

```
$ npm start
```

### Windows Users

If you are on Windows you may run into a few issues.

It is recommended you use [Git for Windows](http://git-for-windows.github.io/).

If you get an alert saying that Google Chrome can't run, try passing in a different browser string into your
`gulp-config.local.yml` file.

```yaml
browserSync:
  browser: ['chrome']
```

## Config Documentation

The [UCD Theme Tasks](https://www.npmjs.com/package/ucd-theme-tasks) node package contains all of the gulp tasks and
wiring needed to compile your code. Using this package allows configuration of your site through a `gulp-config.yml`
file. You can find documentation for the configuration options and how CSS and JS are affected by it at 
[https://github.com/ucdavis/ucd-theme-tasks/tree/master/docs](https://github.com/ucdavis/ucd-theme-tasks/tree/master/docs)


### NPM Dev Dependencies

Install any [NPM](https://www.npmjs.com/) component with the `--save-dev` flag. This is helpful for Sass packages.

    $ npm install {thing} --save-dev
    
The following Sass libraries have been added for ease in development:

* [breakpoint-sass](http://breakpoint-sass.com/) - Media Query helper
* [normalize-scss](https://github.com/JohnAlbin/normalize-scss) - Normalize CSS reset
* [sass-burger](http://joren.co/sass-burger/) - Hambuger Menu
* [sass-toolkit](https://github.com/at-import/toolkit) - Various helper mixins

## Gulp

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You
can compile sass files, uglify and compress js files and much more.

- [Gulp Website](http://gulpjs.com/)
- Article from CSS Tricks: [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

### Local Gulp Configuration

Gulp configuration can be customized to a local environment by creating a `gulp-config.local.yml` file. Any custom
config specific to a local setup can be placed in here and it will not be committed to Git.

Project configuration is found in `gulp-config.yml`. You can copy out config you want to change in your local file.

### Gulp Tasks

There are 3 main gulp tasks you should be aware of. Just add `npx gulp` before each task like `$ npx gulp compile`.

2. **Default** - Generate the entire site and start watching for changes to live reload in the browser
3. **Compile** - Generate the entire site with all assets such as css and js
4. **Validate** - Validate CSS and JS by linting

`$ npx gulp` is the one most often used and is the same as `$ npx gulp default` (this is what `npm start` runs).

### BrowserSync

BrowserSync is being used by Gulp to allow live reloading so that changes will be injected automatically into the site
without having to reload.

When doing local development with a local server like [MAMP](https://www.mamp.info/en/) you will want to add a `domain`
option to a `gulp-config.local.yml` file.

```yaml
browserSync:
  domain: mydomain.local
```

- [BrowserSync Website](https://www.browsersync.io/)
- [Example Video](https://youtu.be/907K7nqYesg)
