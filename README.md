# Frontend Setup

This repository is meant as a one-time starterkit when creating a new web project. It offers default Sass folder structure which will be compiled with Gulp.

### Prerequesites

You'll need [node.js](http://nodejs.org).

After installing Node you should install Gulp and Bower globally (you may need to use `sudo` on a Mac if you get errors).

```
$ npm install --global gulp bower
```

## Install and setup

After cloning and changing into that directory, run this to install dependencies (you may need to use `sudo` on a Mac if you get errors):

    $ npm install
    $ bower install

You may have to run that again for updates; so it may be wise to save this: `$ npm install && bower install`. **If you have any problems; this is the first thing to run.**

Finally, to do an intial build of the site and start watching for changes run `gulp`

```
$ gulp
```

### Bower

Bower is a package manager for the web. It is useful for adding third party libraries for both development and site inclusion.

Install any [Bower](http://bower.io) component with the `--save` or `--save-dev` flag. You can search for [anything that Bower can install](http://bower.io/search/) and run:

    $ bower install {thing} --save

## About Gulp

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more.

- [Gulp Website](http://gulpjs.com/)
- Article from CSS Tricks: [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

### Local Gulp Configuration

Gulp configuration can be customized to a local environment by creating a `gulp-config--custom.yml` file. Any custom config specific to a local setup can be placed in here and it will not be committed to Git.

Default configuration is found in `gulp-config.yml`. You can copy out config you want to change into your custom file.

### Using Gulp with PHPStorm

PHPStorm has [Gulp Tool Window](https://www.jetbrains.com/phpstorm/help/gulp-tool-window.html) for easy use of Gulp tasks.
Right-click on the `gulpfile.js` file and choose `Show Gulp Tasks` to open the window.

Double click `default` to start gulp and begin watching files for changes.

You can double click `help` to see descriptions of available tasks

### BrowserSync

BrowserSync is being used by Gulp to allow live reloading so that changes will be injected automatically into the site without having to reload.
