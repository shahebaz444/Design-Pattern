"use strict";
exports.__esModule = true;
var PrototypeFactory_1 = require("./PrototypeFactory");
var tool = new PrototypeFactory_1.GraphicTool(PrototypeFactory_1.getInstance());
console.log("Tool in use: " + tool.getGraphic().getInfo());
