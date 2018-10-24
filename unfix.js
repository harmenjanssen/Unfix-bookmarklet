// Click the bookmarklet, then click the fixed element.
// Very quick n dirty, could use polishing probably.
(function() {
  'use strict';
  const isFixed = elm => {
    const cs = window.getComputedStyle(elm, null);
    return cs ? cs.getPropertyValue('position') === 'fixed' : false;  
  };
  
  const findInDomAncestry = (matchFn, node) => 
    !node || node === document ? undefined :     
      matchFn(node) ? node :
        findInDomAncestry(matchFn, node.parentNode);
    
  const clickListener = (e) => {
    const fixedTarget = findInDomAncestry(isFixed, e.target);
    if (fixedTarget) {
      fixedTarget.style.setProperty('position', 'static', 'important');
    }
    document.body.style.cursor = '';
    document.removeEventListener('click', clickListener);
  };
  document.body.style.cursor = 'crosshair';
  document.addEventListener('click', clickListener);
})();
