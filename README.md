# CortexJS

CortexJS is a JavaScript library which is used as a simple DOM helper.

## How To Use

```javascript
var crtx = new Cortex();
```

## Documentation

#### elExists(selector);
type: Boolean<br/>
Returns true if at least one element is matched. Returns false otherwise.

```javascript
var a = crtx.elExists('#selector');
console.log(a);
// Example: true
```

#### elCount(selector);
type: Integer<br/>
Returns the number of matched elements.

```javascript
var a = crtx.elCount('div');
console.log(a);
// Example: 6
```

#### doctype();
type: String<br/>
Returns a doctype declaration of the document.

```javascript
var a = crtx.doctype();
console.log(a);
// Example: "<!DOCTYPE html>"
```

#### htmlVersion();
type: Integer/Float<br/>
Returns the version of the html document.

```javascript
var a = crtx.htmlVersion();
console.log(a);
// Example: 4.01
```
