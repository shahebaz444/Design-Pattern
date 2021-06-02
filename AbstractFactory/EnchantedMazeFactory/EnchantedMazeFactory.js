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
var AbstractMazeFactory_1 = require("../AbstractMazeFactory/AbstractMazeFactory");
var EnchantedDoor_1 = require("./EnchantedDoor");
var EnchantedWall_1 = require("./EnchantedWall");
var EnchantedRoom_1 = require("./EnchantedRoom");
var EnchantedMazeFactory = /** @class */ (function (_super) {
    __extends(EnchantedMazeFactory, _super);
    function EnchantedMazeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnchantedMazeFactory.prototype.getDoor = function () {
        return new EnchantedDoor_1.EnchantedDoor();
    };
    EnchantedMazeFactory.prototype.getWall = function () {
        return new EnchantedWall_1.EnchantedWall();
    };
    EnchantedMazeFactory.prototype.getRoom = function () {
        return new EnchantedRoom_1.EnchantedRoom();
    };
    return EnchantedMazeFactory;
}(AbstractMazeFactory_1.AbstractMazeFactory));
exports.EnchantedMazeFactory = EnchantedMazeFactory;
