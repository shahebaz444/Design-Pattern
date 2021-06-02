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
        this.pillar = pillar;
    }
    return Pillar;
}());
exports.Pillar = Pillar;
var SimpleClass = /** @class */ (function (_super) {
    __extends(SimpleClass, _super);
    function SimpleClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleClass.prototype.addElement = function () {
        return '';
    };
    return SimpleClass;
}(Pillar));
exports.SimpleClass = SimpleClass;
var Cement = /** @class */ (function (_super) {
    __extends(Cement, _super);
    function Cement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cement.prototype.addElement = function () {
        return 'Cement ' + this.pillar.addElement();
    };
    return Cement;
}(Pillar));
exports.Cement = Cement;
var Rod = /** @class */ (function (_super) {
    __extends(Rod, _super);
    function Rod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rod.prototype.addElement = function () {
        return 'Rod ' + this.pillar.addElement();
    };
    return Rod;
}(Pillar));
exports.Rod = Rod;
var Stones = /** @class */ (function (_super) {
    __extends(Stones, _super);
    function Stones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stones.prototype.addElement = function () {
        return 'Stones ' + this.pillar.addElement();
    };
    return Stones;
}(Pillar));
exports.Stones = Stones;
var ipman = new Rod(new Stones(new Cement(new Stones(new SimpleClass(null)))));
console.log(ipman.addElement());
