# Unfix-bookmarklet
Bookmarklet for removing position: fixed from elements.

I'm often annoyed by fixed elements taking up space on my wee laptop screen. Usually I don't need a sticky menu in view _all the time_.

Save this script as a bookmark:

`javascript:(function()%20%7B%0A%20%20%27use%20strict%27%3B%0A%20%20const%20isFixed%20%3D%20elm%20%3D%3E%20%7B%0A%20%20%20%20const%20cs%20%3D%20window.getComputedStyle(elm%2C%20null)%3B%0A%20%20%20%20return%20cs%20%3F%20cs.getPropertyValue(%27position%27)%20%3D%3D%3D%20%27fixed%27%20%3A%20false%3B%20%20%0A%20%20%7D%3B%0A%20%20%0A%20%20const%20findInDomAncestry%20%3D%20(matchFn%2C%20node)%20%3D%3E%20%0A%20%20%20%20!node%20%7C%7C%20node%20%3D%3D%3D%20document%20%3F%20undefined%20%3A%20%20%20%20%20%0A%20%20%20%20%20%20matchFn(node)%20%3F%20node%20%3A%0A%20%20%20%20%20%20%20%20findInDomAncestry(matchFn%2C%20node.parentNode)%3B%0A%20%20%20%20%0A%20%20const%20clickListener%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20%20%20const%20fixedTarget%20%3D%20findInDomAncestry(isFixed%2C%20e.target)%3B%0A%20%20%20%20if%20(fixedTarget)%20%7B%0A%20%20%20%20%20%20fixedTarget.style.position%20%3D%20%27static%20!important%27%3B%0A%20%20%20%20%7D%0A%20%20%20%20document.body.style.cursor%20%3D%20%27%27%3B%0A%20%20%20%20document.removeEventListener(%27click%27%2C%20clickListener)%3B%0A%20%20%7D%3B%0A%20%20document.body.style.cursor%20%3D%20%27crosshair%27%3B%0A%20%20document.addEventListener(%27click%27%2C%20clickListener)%3B%0A%7D)()%3B`

Now you can simply click the bookmarklet, and click any annoying fixed element taking up screen real-estate!
