# Unfix-bookmarklet
Bookmarklet for removing position: fixed from elements.

I'm often annoyed by fixed elements taking up space on my wee laptop screen. Usually I don't need a sticky menu in view _all the time_.

Save this script as a bookmark:

`javascript:(function(){"use strict";const t=t=>{const e=window.getComputedStyle(t,null);return!!e&&"fixed"===e.getPropertyValue("position")},e=(t,o)=>o&&o!==document?t(o)?o:e(t,o.parentNode):void 0,o=r=>{const n=e(t,r.target);n&&n.style.setProperty("position","static","important"),r.preventDefault(),document.body.style.removeProperty("cursor"),document.removeEventListener("click",o)};document.body.style.setProperty("cursor","crosshair","important"),document.addEventListener("click",o)})();`

Now you can simply click the bookmarklet, and click any annoying fixed element taking up screen real-estate!

(minified using [https://skalman.github.io/UglifyJS-online/](https://skalman.github.io/UglifyJS-online/))
