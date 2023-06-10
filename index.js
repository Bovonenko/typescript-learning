"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let myCar = class myCar {
    constructor() {
        this.fuel = "50%";
        this.open = true;
    }
    isOpen(value) {
        return this.open ? "open" : "close" + value;
    }
};
__decorate([
    checkNumberOfSeats(4)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuel
], myCar.prototype, "isOpen", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function checkNumberOfSeats(limit) {
    return function (target, propertyKey) {
        console.log(target, propertyKey);
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                value = newAmount;
            }
            else {
                // console.log(`Limit ${limit} `);
                Object.defineProperty(target, "errors", {
                    value: `Limit ${limit} `,
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel(target, propertyKey, descriptor) {
    const oldValue = descriptor.value;
    descriptor.value = function (...args) {
        console.log(this.fuel);
        return oldValue.apply(this, args);
    };
}
function changeDoorStatus(status) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeAmountOfFuel(amount) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
// function checkAmountOfFuel(target: any, context: ClassMethodDecoratorContext) {
// 	return function (this: any, ...args: any[]) {
// 		console.log(this.fuel);
// 		return target.apply(this, args);
// 	};
// }
// function checkAmountOfFuel<T, A extends any[], R>(
// 	target: (this: T, ...args: A) => R,
// 	context: ClassMethodDecoratorContext<T, (this: T, ...args: A) => R>
// ) {
// 	return function (this: T, ...args: A): R {
// 		// console.log(this.fuel);
// 		console.log(`${String(context.name)} started `);
// 		return target.apply(this, args);
// 	};
// }
// function changeDoorStatus(status: boolean) {
// 	console.log("door init");
// 	return <T extends { new (...arg: any[]): {} }>(
// 		target: T,
// 		context: ClassDecoratorContext<T>
// 	) => {
// 		console.log("door changed");
// 		return class extends target {
// 			open = status;
// 		};
// 	};
// }
// function changeAmountOfFuel(amount: number) {
// 	console.log("fuel init");
// 	return <T extends { new (...arg: any[]): {} }>(
// 		target: T,
// 		context: ClassDecoratorContext<T>
// 	) => {
// 		console.log("fuel changed");
// 		return class extends target {
// 			fuel = `${amount}%`;
// 		};
// 	};
// }
const car = new myCar();
car.freeSeats = 6;
console.log(car);
console.log(car.errors);
