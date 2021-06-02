"use strict";
exports.__esModule = true;
var Dog_1 = require("./Dog");
var Flys_1 = require("./Flys");
var dog = new Dog_1.Dog();
console.log(dog.flys.canFly());
dog.setFlys(new Flys_1.DoesFly());
console.log(dog.flys.canFly());
