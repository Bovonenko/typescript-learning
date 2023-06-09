"use strict";
class Box {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
const firstBox = new Box(250, 30);
console.log(firstBox);
class User {
    name;
}
const ivan = new User();
ivan.name = "Ivan";
console.log(ivan);
