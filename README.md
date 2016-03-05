# Frontend Setup

This repository is meant as a one-time starterkit when creating a new web project. It offers default Sass folder structure which will be compiled with Gulp.

### Prerequesites

If you are a Windows user then it is recommended you use [Git for Windows](http://git-for-windows.github.io/).

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

Use `--save` when a package needs to be added as a dependency to the browser such as using [jQuery](https://jquery.com/). The js and css in these packages will automatically be compiled to the `scripts.js` and `vendor.css` files.

Use `--save-dev` when a package is specifically for development purposes like when using a Sass library such as [Breakpoint](http://breakpoint-sass.com/)

#### Bower Overrides

If a Bower package does not specify all the assets you need in its `"main"` property, then you can add or delete other assets it has packaged with an override. You can also remove any dependencies that it might want to include.

Add overrides to the `bower.json` file.

```json
{
  "overrides": {
    "package-name": {
      "main": ["file-you-want-included.js"],
      "dependencies": {}
    }
  }
}
```

#### Bower Include Paths

If Bower is used to add dependencies and libraries for Sass then it is helpful to add it's `includePaths` to the `gulp-config.yml` file. This allows shorter import names to work in Sass files.

With an `includePaths` added to the `gulp-config.yml` file a simple `@import "breakpoint";` can be used instead of `@import "../bower_components/breakpoint-sass/stylesheets/breakpoint";"`.

This also helps with any dependencies that Bower package might rely on.

## Gulp

Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. You can compile sass files, uglify and compress js files and much more.

- [Gulp Website](http://gulpjs.com/)
- Article from CSS Tricks: [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

### Local Gulp Configuration

Gulp configuration can be customized to a local environment by creating a `gulp-config--custom.yml` file. Any custom config specific to a local setup can be placed in here and it will not be committed to Git.

Default configuration is found in `gulp-config.yml`. You can copy out config you want to change into your custom file.

### Gulp Tasks

There are 4 main gulp tasks you should be aware of. Just add `gulp` before each task like `$ gulp help`.

1. **Help** - Displays a list of all the available tasks with a brief discription of each
2. **Default** - Generate the entire site and start watching for changes to live reload in the browser
3. **Compile** - Generate the entire site with all assets such as css and js
4. **Validate** - Validate CSS and JS by linting

`$ gulp` is the one most often used and is the same as `$ gulp default`

### Using Gulp with PHPStorm

PHPStorm has [Gulp Tool Window](https://www.jetbrains.com/phpstorm/help/gulp-tool-window.html) for easy use of Gulp tasks.
Right-click on the `gulpfile.js` file and choose `Show Gulp Tasks` to open the window.

Double click `default` to start gulp and begin watching files for changes.

You can double click `help` to see descriptions of available tasks

### BrowserSync

BrowserSync is being used by Gulp to allow live reloading so that changes will be injected automatically into the site without having to reload.

- [BrowserSync Website](https://www.browsersync.io/)
- [Example Video](https://youtu.be/907K7nqYesg)
