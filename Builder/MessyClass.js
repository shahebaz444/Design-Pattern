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
var arr = ['S', 'M', 'L', 'XL', 'XXL'];
var MessyClass = /** @class */ (function () {
    function MessyClass(builder) {
        this.builder = builder;
        this.a = builder.a;
        this.b = builder.b;
        this.c = builder.c;
        this.d = builder.d;
        this.e = builder.e;
    }
    MessyClass.prototype.getA = function () {
        return this.a;
    };
    MessyClass.prototype.getD = function () {
        return this.d;
    };
    MessyClass.prototype.getC = function () {
        return this.c;
    };
    MessyClass.prototype.getE = function () {
        return this.e;
    };
    return MessyClass;
}());
exports.MessyClass = MessyClass;
var Builder = /** @class */ (function () {
    function Builder(a, b) {
        this.a = a;
        this.b = b;
    }
    Builder.prototype.addC = function (c) {
        this.c = c;
        return this;
    };
    Builder.prototype.addD = function (d) {
        this.d = d;
        return this;
    };
    Builder.prototype.addE = function (e) {
        this.e = e;
        return this;
    };
    return Builder;
}());
exports.Builder = Builder;
var Build = /** @class */ (function (_super) {
    __extends(Build, _super);
    function Build() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Build.prototype.addC = function (c) {
        this.c = c + 1;
        return this;
    };
    Build.prototype.addD = function (d) {
        this.d = d + 1;
        return this;
    };
    return Build;
}(Builder));
exports.Build = Build;
var StringBuilder = /** @class */ (function (_super) {
    __extends(StringBuilder, _super);
    function StringBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringBuilder.prototype.addC = function (c) {
        if (c >= arr.length)
            this.c = 'NaN';
        else
            this.c = arr[c];
        return this;
    };
    StringBuilder.prototype.addD = function (d) {
        if (d >= arr.length)
            this.d = 'NaN';
        else
            this.d = arr[d];
        return this;
    };
    return StringBuilder;
}(Builder));
exports.StringBuilder = StringBuilder;
var messy = new MessyClass(new Builder(1, 2).addC(0).addD(9));
var messi = new MessyClass(new Build(1, 2)
    .addC(2)
    .addD(3)
    .addE(5));
var Storage = /** @class */ (function () {
    function Storage() {
        this.c = 'X';
        this.d = 'Y';
        this.e = 'Z';
    }
    Storage.prototype.getCDE = function () {
        return [this.c, this.d, this.e];
    };
    return Storage;
}());
exports.Storage = Storage;
var Foreign = /** @class */ (function (_super) {
    __extends(Foreign, _super);
    function Foreign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Foreign.prototype.addAll = function () {
        var storage = new Storage();
        var arr = storage.getCDE();
        this.c = arr[0];
        this.d = arr[1];
        this.e = arr[2];
        return this;
    };
    return Foreign;
}(Builder));
exports.Foreign = Foreign;
var ron = new MessyClass(new StringBuilder(1, 2).addC(3).addD(10));
var chris = new MessyClass(new Foreign(1, 2).addAll());
console.log(messy.getA());
console.log(messi.getD());
console.log(ron.getD());
console.log(chris.getC());
console.log(chris.getE());
