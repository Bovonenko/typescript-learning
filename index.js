"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// @changeDoorStatus(false)
// @changeAmountOfFuel(95)
let myCar = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _freeSeats_decorators;
    let _freeSeats_initializers = [];
    return _a = class myCar {
            constructor() {
                this.fuel = (__runInitializers(this, _instanceExtraInitializers), "50%");
                this.open = true;
                this.freeSeats = __runInitializers(this, _freeSeats_initializers, 3);
            }
            // @checkAmountOfFuel
            isOpen(value) {
                return this.open ? "open" : "close" + value;
            }
        },
        (() => {
            _freeSeats_decorators = [checkNumberOfSeats(4)];
            __esDecorate(null, null, _freeSeats_decorators, { kind: "field", name: "freeSeats", static: false, private: false, access: { has: obj => "freeSeats" in obj, get: obj => obj.freeSeats, set: (obj, value) => { obj.freeSeats = value; } } }, _freeSeats_initializers, _instanceExtraInitializers);
        })(),
        _a;
})();
function checkNumberOfSeats(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            }
            else {
                throw Error(`error: Limit is ${limit}`);
            }
        };
    };
}
// function checkNumberOfSeats(limit: number) {
// 	return function (target: Object, propertyKey: string | symbol) {
// 		let symbol = Symbol();
// 		const getter = function (this: any) {
// 			return this[symbol];
// 		};
// 		const setter = function (this: any, newAmount: number) {
// 			if (newAmount >= 1 && newAmount < limit) {
// 				this[symbol] = newAmount + 1;
// 			} else {
// 				// console.log(`Limit ${limit} `);
// 				Object.defineProperty(target, "errors", {
// 					value: `Limit ${limit} `,
// 				});
// 			}
// 		};
// 		Object.defineProperty(target, propertyKey, {
// 			get: getter,
// 			set: setter,
// 		});
// 	};
// }
// function checkAmountOfFuel(
// 	target: Object,
// 	propertyKey: string | symbol,
// 	descriptor: PropertyDescriptor
// ): PropertyDescriptor | void {
// 	const oldValue = descriptor.value;
// 	descriptor.value = function (this: any, ...args: any[]) {
// 		console.log(this.fuel);
// 		return oldValue.apply(this, args);
// 	};
// }
// function changeDoorStatus(status: boolean) {
// 	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
// 		return class extends constructor {
// 			open = status;
// 		};
// 	};
// }
// function changeAmountOfFuel(amount: number) {
// 	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
// 		return class extends constructor {
// 			fuel = `${amount}%`;
// 		};
// 	};
// }
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
car.freeSeats = -3;
console.log(car);
console.log(car.errors);
