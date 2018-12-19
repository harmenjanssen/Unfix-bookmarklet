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
    e.preventDefault();
    document.body.style.removeProperty('cursor');
    document.removeEventListener('click', clickListener);
  };
  document.body.style.setProperty('cursor', 'crosshair', 'important');
  document.addEventListener('click', clickListener);
})();
