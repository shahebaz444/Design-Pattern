"use strict";
exports.__esModule = true;
var Editor_1 = require("./Editor");
var editor = Editor_1.Editor.getInstance();
var o = new Editor_1.Overrider();
console.log(editor.read());
o.done(new Editor_1.Derived());
