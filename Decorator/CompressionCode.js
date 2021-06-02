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
var CompressionCodeImpl = /** @class */ (function () {
    function CompressionCodeImpl(code) {
        this.code = code;
    }
    return CompressionCodeImpl;
}());
exports.CompressionCodeImpl = CompressionCodeImpl;
var SimpleCompression = /** @class */ (function (_super) {
    __extends(SimpleCompression, _super);
    function SimpleCompression() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleCompression.prototype.compress = function () {
        return '';
    };
    return SimpleCompression;
}(CompressionCodeImpl));
exports.SimpleCompression = SimpleCompression;
var HuffMan = /** @class */ (function (_super) {
    __extends(HuffMan, _super);
    function HuffMan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuffMan.prototype.compress = function () {
        return 'HuffMan ' + this.code.compress();
    };
    return HuffMan;
}(CompressionCodeImpl));
exports.HuffMan = HuffMan;
var ShannonFano = /** @class */ (function (_super) {
    __extends(ShannonFano, _super);
    function ShannonFano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShannonFano.prototype.compress = function () {
        return 'ShannonFano ' + this.code.compress();
    };
    ShannonFano.prototype.returnRatio = function () {
        return 67;
    };
    return ShannonFano;
}(CompressionCodeImpl));
exports.ShannonFano = ShannonFano;
var RLE = /** @class */ (function (_super) {
    __extends(RLE, _super);
    function RLE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RLE.prototype.compress = function () {
        return 'RLE' + this.code.compress();
    };
    return RLE;
}(CompressionCodeImpl));
exports.RLE = RLE;
var compressor = new RLE(new ShannonFano(new HuffMan(new ShannonFano(new SimpleCompression(null)))));
console.log(compressor.compress());
