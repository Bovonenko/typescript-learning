interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	freeSeats: number;

	@checkAmountOfFuel
	isOpen(value: string) {
		return this.open ? "open" : "close" + value;
	}
}

function checkAmountOfFuel(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, ...args: any[]) {
		console.log(this.fuel);
		return oldValue.apply(this, args);
		// console.log(this.fuel);
		// return this.open ? "open" : "close";
	};
}

function changeDoorStatus(status: boolean) {
	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			open = status;
		};
	};
}

function changeAmountOfFuel(amount: number) {
	return <T extends { new (...arg: any[]): {} }>(constructor: T) => {
		return class extends constructor {
			fuel = `${amount}%`;
		};
	};
}

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
