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
    let _set_weight_decorators;
    let _get_weight_decorators;
    return _a = class myCar {
            constructor() {
                this.fuel = (__runInitializers(this, _instanceExtraInitializers), "50%");
                this.open = true;
                this._weight = 1000;
                // @checkNumberOfSeats(4)
                this.freeSeats = 3;
            }
            set weight(num) {
                this._weight = this._weight + num;
            }
            get weight() {
                return this._weight;
            }
            // @checkAmountOfFuel
            isOpen(value) {
                return this.open ? "open" : "close" + value;
            }
        },
        (() => {
            _set_weight_decorators = [logOnSet];
            _get_weight_decorators = [logOnGet];
            __esDecorate(_a, null, _set_weight_decorators, { kind: "setter", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, set: (obj, value) => { obj.weight = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_weight_decorators, { kind: "getter", name: "weight", static: false, private: false, access: { has: obj => "weight" in obj, get: obj => obj.weight } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();
function logOnSet(target, context) {
    return function (...args) {
        console.log(`Changing num ${[...args]}`);
        return target.apply(this, args);
    };
}
function logOnGet(target, context) {
    return function () {
        console.log(`test`);
        return target.apply(this);
    };
}
// function log(
// 	target: Object,
// 	propertyKey: string | symbol,
// 	descriptor: PropertyDescriptor
// ): PropertyDescriptor | void {
// 	const oldValue = descriptor.set;
// 	const oldGet = descriptor.get;
// 	descriptor.set = function (this: any, ...args: any) {
// 		console.log(`Changing num ${[...args]}`);
// 		return oldValue?.apply(this, args);
// 	};
// 	descriptor.get = function () {
// 		console.log(`test`);
// 		return oldGet?.apply(this);
// 	};
// }
// function checkNumberOfSeats(limit: number) {
// 	return function (target: undefined, context: ClassFieldDecoratorContext) {
// 		return function (this: any, newAmount: number) {
// 			if (newAmount >= 1 && newAmount < limit) {
// 				return newAmount;
// 			} else {
// 				throw Error(`error: Limit is ${limit}`);
// 			}
// 		};
// 	};
// }
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
car.weight = -3;
console.log(car.weight);
// console.log(car.errors);
