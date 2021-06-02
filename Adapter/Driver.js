"use strict";
exports.__esModule = true;
function getInstance() {
    return new Word();
}
var Paint = /** @class */ (function () {
    function Paint() {
    }
    Paint.prototype.dragNdrop = function () {
        return 'Dropped';
    };
    return Paint;
}());
exports.Paint = Paint;
var Word = /** @class */ (function () {
    function Word() {
    }
    Word.prototype.dragNdrop = function () {
        return 'Word';
    };
    return Word;
}());
exports.Word = Word;
var Adapter = /** @class */ (function () {
    function Adapter() {
        this.paint = getInstance();
    }
    Adapter.prototype.dragNdrop = function () {
        return this.paint.dragNdrop();
    };
    return Adapter;
}());
exports.Adapter = Adapter;
var os = new Adapter();
console.log(os.dragNdrop());
