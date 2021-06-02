"use strict";
exports.__esModule = true;
var EnchantedMazeFactory_1 = require("../EnchantedMazeFactory/EnchantedMazeFactory");
var AbstractMazeFactory = /** @class */ (function () {
    function AbstractMazeFactory() {
    }
    AbstractMazeFactory.getInstance = function () {
        return new EnchantedMazeFactory_1.EnchantedMazeFactory();
    };
    return AbstractMazeFactory;
}());
exports.AbstractMazeFactory = AbstractMazeFactory;
