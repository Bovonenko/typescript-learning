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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
let myCar = (() => {
    let _classDecorators = [changeDoorStatus(false), changeAmountOfFuel(95)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _isOpen_decorators;
    var myCar = _classThis = class {
        constructor() {
            this.fuel = (__runInitializers(this, _instanceExtraInitializers), "50%");
            this.open = true;
        }
        isOpen(value) {
            return this.open ? "open" : "close" + value;
        }
    };
    __setFunctionName(_classThis, "myCar");
    (() => {
        _isOpen_decorators = [checkAmountOfFuel];
        __esDecorate(_classThis, null, _isOpen_decorators, { kind: "method", name: "isOpen", static: false, private: false, access: { has: obj => "isOpen" in obj, get: obj => obj.isOpen } }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        myCar = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return myCar = _classThis;
})();
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
function checkAmountOfFuel(target, context) {
    return function (...args) {
        // console.log(this.fuel);
        console.log(`${String(context.name)} started `);
        return target.apply(this, args);
    };
}
function changeDoorStatus(status) {
    console.log("door init");
    return (target, context) => {
        console.log("door changed");
        return class extends target {
            constructor() {
                super(...arguments);
                this.open = status;
            }
        };
    };
}
function changeAmountOfFuel(amount) {
    console.log("fuel init");
    return (target, context) => {
        console.log("fuel changed");
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = `${amount}%`;
            }
        };
    };
}
// function closeCar<T extends { new (...arg: any[]): {} }>(constructor: T) {
// 	return class extends constructor {
// 		open = false;
// 	};
// }
// function addFuel(car: myCar) {
// 	car.fuel = "100%";
// 	console.log("add fuel");
// 	return car;
// }
const car = new myCar();
console.log(car.isOpen("checked"));
