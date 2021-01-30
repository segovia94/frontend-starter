# SASS Folder Structure

```
|-- sass
|   |-- 0_tools
|   |-- 1_base_html
|   |-- 2_base_class
|   |-- 3_objects
|   |-- 4_component
|   |-- 5_layout
|   |-- 6_utility
|   |-- vendor - delete if not using
|   |-- _hacks.scss
|   |-- _variables.scss
|   |-- normalize.scss
|   |-- style.scss
```

## 0. Tools
This folder contains global tools and settings.

Mixins should be placed here so that they are usable for all SASS partials.

## 1. Base HTML
Only basic HTML tags should be used in this directory. This is the foundation for all classes which will follow.

## 2. Base Class
Any basic element styles which would augment Base HTML or will be needed by various components should go here. Examples
would be Buttons or other default styles before being turned into Components.

## 3. Objects
The `objects` folder contains css objects that are self-contained and reusable. They are prefixed with `.o-` to easily
identify them in markup.

## 4. Component
**The majority of all styles will go here.** Each component should be completely isolated from any other component.
There should not be any sharing of styles among components. As well, cascading order should not be required for any
component.

In general, stay away from assuming any sort of HTML structure. Obviously this isn't always possible, but it's a good
rule of thumb to follow.

Don't Use:
```scss
.block div ul li {
  margin: 0;
}
```
Instead Use:
```scss
.block__item {
  margin: 0;
}
```

## 5. Layout
Use this folder for any site-wide layout classes. This should be agnostic from the rest of the site's styles.

Prefix layout classes with `.l-` which will make reading through html easy to spot layout items.

For Example:
```scss
.l-container {}
```

## 6. Utility
The `utility` folder contains global css utility helper classes which are prefixed with `.u-` to easily identify them in
markup. They make use of `!important` to ensure that their styles always apply ahead of those defined in a component's
dedicated CSS.

## Vendor - delete if not using

The `vendor` directory can be used to add third party libraries that have not already been added via NPM. It is
preferable to use NPM if at all possible. This should just be pure CSS and not include Sass files.

CSS in this directory will be compiled with bower components into a **/dist/vendor.css** file.


## Files
**_variables.scss** contains all the site SASS variables which will be used by components, mixins, and anything else
which needs values abstracted for site-wide use.

**_hacks.scss**: this partial should be used sparingly when something needs to be done very quickly without time to put
a style in its proper place. This file overrides everything so it should be cleaned up regularly so that styles go in
their proper place.

**normalize.scss**: This is a reset file which should be loaded in before any other CSS files.
See [http://nicolasgallagher.com/about-normalize-css/](http://nicolasgallagher.com/about-normalize-css/).

**style.scss**: This is the main file which will be rendered into **style.css**. It contains all of the SASS libraries
and partials necessary to build CSS.

Don't put any styles directly into **style.scss**!


# CSS formatting guidelines
See the [Drual CSS guidlines](https://www.drupal.org/node/1887862) and
[Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture) documentation.

One item to note is that this guideline is for CSS and does not take SASS/SCSS syntax into account. Because of this
there is one specific change.

Place a space in between each class. This allows better readability since each SASS partial will only have a few classes
per file.

Example
```scss
.block {
  padding: 1em;
}

.block--success {
  color: green;
}
```

> ID tags `#id-tags` should NEVER be used! Only use classes.

## SASS formatting guidelines
The order of mixins and placeholders:

1. extend %placeholder
2. include mixin()
3. regular styles
4. include breakpoint() //media query

```scss
.block {
  // Placeholder is extended
  @extend %default-block;

  // Mixin is added
  @include list-flush();

  // Normal styles are used
  padding: 0;
  text-align: center;

  // Use a Media Query to augment for responsive design
  @include breakpoint(500px) {
    padding: 1em;
  }
}
```

## BEM naming format using SASS
```scss
.block {
  // Add any .block styles here

  &__element {
    // Add any elements styles here
  }

  &--modifier {
    // Add modifiers here
  }
}
```

This will render into CSS
```scss
.block {
  // .block styles here
}

.block__element {
  // .block__element styles here
}

.block--modifier {
  // .block--modifier styles here
}
```

## Validation

[Sass Lint](https://github.com/sasstools/sass-lint) is being used to validate Sass/Scss files via the
[gulp-sass-lint](https://www.npmjs.com/package/gulp-sass-lint).

The gulp task `npx gulp validate:css` can be used to easily validate all Sass.


# Useful Articles and Links
Drupal CSS formating guides

* [Drual CSS guidlines](https://www.drupal.org/node/1887862)
* [Drupal CSS Architecture](https://www.drupal.org/coding-standards/css/architecture) - This repo uses a different
folder structure, but it follows the same ideas.

BEM naming convention

* [http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
* [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)

Sass Info

* [http://sass-lang.com/guide](http://sass-lang.com/guide)
* [http://leveluptuts.com/tutorials/sass-tutorials](http://leveluptuts.com/tutorials/sass-tutorials)

Sass Libraries, Helpers, and Shortcut tools

* [Breakpoint](http://breakpoint-sass.com/) & [Breakpoint Wiki](https://github.com/at-import/breakpoint/wiki) - Use Breakpoint for media queries in responsive design.
* [Toolkit](https://github.com/at-import/toolkit) - This is a library of cool mixins and helpers.

Sass Playground (use this to try things out)

* [CodePen](http://codepen.io/pen/)
* [SassMeister](http://sassmeister.com/)
