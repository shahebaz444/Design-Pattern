"use strict";
/**
 * A general framework for graphical editor
 * @Author Suhas Krishna Srivastava
 */
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
function getInstance() {
    return new MusicalNote();
}
exports.getInstance = getInstance;
var Graphic = /** @class */ (function () {
    function Graphic() {
    }
    Graphic.prototype.clone = function () {
        return this;
    };
    Graphic.prototype.getInfo = function () {
        return 'Graphic';
    };
    return Graphic;
}());
exports.Graphic = Graphic;
var Tool = /** @class */ (function () {
    function Tool() {
    }
    return Tool;
}());
exports.Tool = Tool;
var GraphicTool = /** @class */ (function (_super) {
    __extends(GraphicTool, _super);
    function GraphicTool(_prototype) {
        var _this = _super.call(this) || this;
        _this._prototype = _prototype;
        return _this;
    }
    GraphicTool.prototype.getGraphic = function () {
        return this._prototype;
    };
    return GraphicTool;
}(Tool));
exports.GraphicTool = GraphicTool;
var MusicalNote = /** @class */ (function (_super) {
    __extends(MusicalNote, _super);
    function MusicalNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicalNote.prototype.getInfo = function () {
        return 'MusicalNote';
    };
    return MusicalNote;
}(Graphic));
exports.MusicalNote = MusicalNote;
var Pixel = /** @class */ (function (_super) {
    __extends(Pixel, _super);
    function Pixel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pixel.prototype.getInfo = function () {
        return 'Pixel';
    };
    return Pixel;
}(Graphic));
exports.Pixel = Pixel;
