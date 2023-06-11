import "reflect-metadata";
const limitMetadataKey = Symbol("limit");

interface ICar {
	fuel: string;
	open: boolean;
	freeSeats: number;
}

class myCar implements ICar {
	fuel: string = "50%";
	open: boolean = true;
	errors: any;
	_weight: number = 1000;

	set weight(num: number) {
		this._weight = this._weight + num;
	}

	get weight() {
		return this._weight;
	}

	freeSeats: number = 3;

	isOpen(value: string) {
		return this.open ? "open" : "close" + value;
	}

	@validate
	startTravel(@limit passengers: number) {
		console.log(`Started with ${passengers} passengers`);
	}
}

function limit(
	target: Object,
	propertyKey: string | symbol,
	parametrIndex: number
) {
	let limitedParametrs: number[] =
		Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
	limitedParametrs.push(parametrIndex);
	Reflect.defineMetadata(
		limitMetadataKey,
		limitedParametrs,
		target,
		propertyKey
	);
}

function validate(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) {
	let method = descriptor.value;

	descriptor.value = function (...args: any) {
		let limitedParametrs: number[] = Reflect.getOwnMetadata(
			limitMetadataKey,
			target,
			propertyKey
		);

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
car.startTravel(3);
