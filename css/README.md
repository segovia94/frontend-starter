# CSS

Each file in the **/sass** directory will be processed with LibSass and added to this directory.

The main file generated in this directory will be **/css/style.css**

Please use multiple files rather than stuffing all javascript into a single file.


## Vendor directory

The `vendor` directory can be used to add third party libraries that have not already been added via Bower. It is preferable to use Bower if at all possible. This should just be pure CSS and not include Sass files.

CSS in this directory will be compiled with bower components into a **/css/vendor.css** file.
