CortexJS
========

CortexJS is a JavaScript library which is used as a simple DOM helper.

How To Use
========

var crtx = new Cortex();
console.log(crtx.elExists('body'));

Documentation
========

elExists(selector);
type: Boolean
Returns true if at least one element is matched. Returns false otherwise.

elCount(selector);
type: Integer
Returns the number of matched elements.

doctype();
type: String
Returns a doctype declaration of the document.

htmlVersion();
type: Integer/Float
Returns the version of the html document.
