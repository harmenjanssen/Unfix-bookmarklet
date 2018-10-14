# Unfix-bookmarklet
Bookmarklet for removing position: fixed from elements.

I'm often annoyed by fixed elements taking up space on my wee laptop screen. Usually I don't need a sticky menu in view _all the time_.

Save this script as a bookmark:

`javascript:(function()%7B(function()%20%7B'use%20strict'%3Bconst%20isFixed%20%3D%20elm%20%3D%3E%20%7Bconst%20cs%20%3D%20window.getComputedStyle(elm%2C%20null)%3Breturn%20cs%20%3F%20cs.getPropertyValue('position')%20%3D%3D%3D%20'fixed'%20%3A%20false%3B%7D%3Bconst%20findInDomAncestry%20%3D%20(matchFn%2C%20node)%20%3D%3E!node%20%7C%7C%20node%20%3D%3D%3D%20document%20%3F%20undefined%20%3AmatchFn(node)%20%3F%20node%20%3AfindInDomAncestry(matchFn%2C%20node.parentNode)%3Bconst%20clickListener%20%3D%20(e)%20%3D%3E%20%7Bconst%20fixedTarget%20%3D%20findInDomAncestry(isFixed%2C%20e.target)%3Bif%20(fixedTarget)%20%7BfixedTarget.style.position%20%3D%20'static'%3B%7Ddocument.body.style.cursor%20%3D%20''%3Bdocument.removeEventListener('click'%2C%20clickListener)%3B%7D%3Bdocument.body.style.cursor%20%3D%20'crosshair'%3Bdocument.addEventListener('click'%2C%20clickListener)%3B%7D)()%7D)()`

Now you can simply click the bookmarklet, and click any annoying fixed element taking up screen real-estate!
