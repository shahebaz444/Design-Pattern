"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Overrider = exports.Derived = exports.Editor = void 0;
var PaintEditor_1 = require("./PaintEditor");
var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.getInstance = function () {
        return new PaintEditor_1.PaintEditor();
    };
    return Editor;
}());
exports.Editor = Editor;
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(Base));
exports.Derived = Derived;
var Overrider = /** @class */ (function () {
    function Overrider() {
    }
    Overrider.prototype.done = function (base) { };
    return Overrider;
}());
exports.Overrider = Overrider;
