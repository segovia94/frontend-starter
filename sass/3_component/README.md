# 3. Component
**The majority of all styles will go here.** Each component should be completely isolated from any other component. There should not be any sharing of styles among components. As well, cascading order should not be required for any component.

In general, stay away from assuming any sort of HTML structure. Obviously this isn't always possible, but it's a good rule of thumb to follow.

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
