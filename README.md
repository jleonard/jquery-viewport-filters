jquery.expression.onscreen
==========================

> jQuery selectors for filtering elements based on their *y* axis position relative to the viewport. 

##### Filter for elements that are >= a specific percentage on screen

```
var o = $('.mySelector:percentOnScreen(25)');
```

##### Filter for elements that have >= a specific number pixels on screen

```
var o = $('.mySelector:pixelsOnScreen(116)');
```

##### Filter for elements fully inside the viewport
```
var o = $('.mySelector:insideViewport');
```

##### Filter for elements fully below the viewport
```
var o = $('.mySelector:offscreenBottom');
```

##### Filter for elements fully above the viewport
```
var o = $('.mySelector:offscreenTop');
```