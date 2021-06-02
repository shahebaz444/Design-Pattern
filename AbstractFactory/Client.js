"use strict";
exports.__esModule = true;
var Client = /** @class */ (function () {
    function Client(abstractMazeFactory) {
        this.abstractMazeFactory = abstractMazeFactory;
        this.abstractWall = abstractMazeFactory.getWall();
        this.abstractDoor = abstractMazeFactory.getDoor();
        this.abstractRoom = abstractMazeFactory.getRoom();
    }
    return Client;
}());
exports.Client = Client;
