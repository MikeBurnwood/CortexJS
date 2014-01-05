var Cortex = (function(){
    this.elExists = function(q){return new Boolean(document.querySelectorAll(q).length);};
    this.elCount = function(q){return new Number(document.querySelectorAll(q).length);};
    this.doctype = function(){return "<!DOCTYPE "+document.doctype.name+(document.doctype.publicId ? ' PUBLIC "'+document.doctype.publicId + '"' : '')+(!document.doctype.publicId&&document.doctype.systemId ? ' SYSTEM' : '')+(document.doctype.systemId ? ' "' + document.doctype.systemId + '"' : '')+'>';};
    this.htmlVersion = function(){var p = document.doctype.publicId, v;if(p.length===0) v = 5;else if(new RegExp('-//W3C//DTD HTML 4.01').test(p)) v = 4.1;else if(new RegExp('-//W3C//DTD HTML 3.2').test(p)) v = 3.2;else if(new RegExp('-//W3C//DTD XHTML 1.0').test(p)) v = 1.0;else if(new RegExp('-//W3C//DTD XHTML 1.1').test(p)) v = 1.1;else v = 'unknown';return v;};
});
