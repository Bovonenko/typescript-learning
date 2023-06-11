interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

// @changeDoorStatus(false)
// @changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	errors: any;
	_weight: number = 1000;

	@logOnSet
	set weight(num: number) {
		this._weight = this._weight + num;
	}

	@logOnGet
	get weight() {
		return this._weight;
	}

	// @checkNumberOfSeats(4)
	freeSeats: number = 3;

	// @checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? "open" : "close" + value;
	}
}

function logOnSet<T, R>(
	target: (this: T, value: number) => R,
	context: ClassSetterDecoratorContext<T, number>
) {
	return function (this: T, ...args: any): R {
		console.log(`Changing num ${[...args]}`);
		return target.apply(this, args);
	};
}

function logOnGet<T, R>(
	target: (this: T) => R,
	context: ClassGetterDecoratorContext<T, number>
) {
	return function (this: T): R {
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
