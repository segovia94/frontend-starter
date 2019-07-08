# 0. Tools
This folder contains global tools or base settings.

Mixins should be placed here so that they are usable for all SASS partials.

The `objects` folder contains css objects that are self-contained and reusable.

The `utility` folder contains global css utility helper classes which are prefixed with `.u-` to easily identify them in
markup. They make use of `!important` to ensure that their styles always apply ahead of those defined in a component's
dedicated CSS.
