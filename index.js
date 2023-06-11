"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol("limit");
class myCar {
    constructor() {
        this.fuel = "50%";
        this.open = true;
        this._weight = 1000;
        this.freeSeats = 3;
    }
    set weight(num) {
        this._weight = this._weight + num;
    }
    get weight() {
        return this._weight;
    }
    isOpen(value) {
        return this.open ? "open" : "close" + value;
    }
    startTravel(passengers) {
        console.log(`Started with ${passengers} passengers`);
    }
}
__decorate([
    validate,
    __param(0, limit),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], myCar.prototype, "startTravel", null);
function limit(target, propertyKey, parametrIndex) {
    let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
    limitedParametrs.push(parametrIndex);
    Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
}
function validate(target, propertyKey, descriptor) {
    let method = descriptor.value;
    descriptor.value = function (...args) {
        let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
        if (limitedParametrs) {
            for (let index of limitedParametrs) {
                if (args[index] > 4) {
                    throw new Error("Limit of passengers is 4");
                }
            }
        }
        return method?.apply(this, args);
    };
}
const car = new myCar();
car.startTravel(23);
