# Frontend Setup

### Prerequesites

You'll need [node.js](http://nodejs.org).

After installing Node you should install Gulp and Bower globally

```
$ sudo npm install --global gulp bower
```

## Install and setup

After cloning and changing into that directory, run this to install dependencies (you may need to use `sudo` if you get errors):

    $ npm install
    $ bower install

You may have to run that again for updates; so it may be wise to save this: `$ npm install && bower install`. **If you have any problems; this is the first thing to run.**

Finally, to do an intial build of the site and start watching for changes run `gulp`

```
$ gulp
```

## Assets (CSS & JS)

To add either CSS or JS to Pattern Lab, use one of these methods:

### Bower

Installing any [Bower](http://bower.io) component with the `--save` or `--save-dev` flag will get the `main` asset's `<link>` or `<script>` tags added to Pattern Lab automatically via [wiredep](https://github.com/taptapship/wiredep). So, you can search for [anything that Bower can install](http://bower.io/search/) and run:

    $ bower install {thing} --save

### Editing the head or foot partial

If you want the most direct access, which the above method injects into, then just head to one of these files:

- `pattern-lab/source/_patterns/00-atoms/00-meta/_00-head.mustache`
- `pattern-lab/source/_patterns/00-atoms/00-meta/_01-foot.mustache`

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



## About Pattern Lab
- [Pattern Lab Website](http://patternlab.io/)
- [About Pattern Lab](http://patternlab.io/about.html)
- [Documentation](http://patternlab.io/docs/index.html)
- [Demo](http://demo.patternlab.io/)

The PHP version of Pattern Lab is, at its core, a static site generator. It combines platform-agnostic assets, like the [Mustache](http://mustache.github.io/)-based patterns and the JavaScript-based viewer, with a PHP-based "builder" that transforms and dynamically builds the Pattern Lab site. By making it a static site generator, Pattern Lab strongly separates patterns, data, and presentation from build logic.