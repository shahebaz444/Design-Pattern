"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pillar = /** @class */ (function () {
    function Pillar(pillar) {
        this.element = this.constructor.toString().match(/\w+/g)[1];
        this.pillar = pillar;
    }
    Pillar.prototype.addElement = function () {
        return this.element + ' ' + this.pillar.addElement(); //Don't Repeat Yourself
    };
    return Pillar;
}());
exports.Pillar = Pillar;
var SimpleClass = /** @class */ (function (_super) {
    __extends(SimpleClass, _super);
    function SimpleClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.element = ' ';
        return _this;
    }
    SimpleClass.prototype.addElement = function () {
        return ' '; //overridden this to avoid accessing null object
    };
    return SimpleClass;
}(Pillar));
exports.SimpleClass = SimpleClass;
var Cement = /** @class */ (function (_super) {
    __extends(Cement, _super);
    function Cement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cement;
}(Pillar));
exports.Cement = Cement;
var Rod = /** @class */ (function (_super) {
    __extends(Rod, _super);
    function Rod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rod;
}(Pillar));
exports.Rod = Rod;
var Stones = /** @class */ (function (_super) {
    __extends(Stones, _super);
    function Stones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stones;
}(Pillar));
exports.Stones = Stones;
var ipman = new Rod(new Stones(new Cement(new Stones(new SimpleClass(null)))));
console.log(ipman.addElement());
