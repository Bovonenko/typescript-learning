function printMsg(msg: string[] | number | boolean): void {
	if (Array.isArray(msg)) {
		msg.forEach((m) => console.log(m));
	} else if (isNumber(msg)) {
		console.log(msg);
	} else {
		console.log(msg);
	}
	console.log(msg);
}

printMsg(3);

// function isNumber(n: string[] | number | boolean): n is number {
// 	return typeof n === 'number';
// }

function isNumber(n: unknown): n is number {
	return typeof n === 'number';
}

interface Car {
	name: 'car';
	engine: string;
	wheels: {
		number: number;
		type: string;
	};
}

interface Ship {
	name: 'ship';
	engine: string;
	sail: string;
}

interface Airplane {
	name: 'airplane';
	engine: string;
	wings: string;
}

interface SuperAirplane {
	name: 'smth';
	engine: string;
	wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function repairVehicle(vehicle: Vehicle) {
	// if (isCar(vehicle)) {
	// 	vehicle.wheels;
	// } else if (isShip(vehicle)) {
	// 	vehicle.sail;
	// } else {
	// 	vehicle.wings;
	// }

	switch (vehicle.name) {
		case 'car':
			console.log(vehicle.wheels);
			break;
		case 'ship':
			console.log(vehicle.sail);
			break;
		case 'airplane':
			console.log(vehicle.wings);
			break;
		case 'smth':
			console.log(vehicle.wings);
			break;
		default:
			const smth: never = vehicle;
			console.log('oops!');
	}
}

function isCar(car: Vehicle): car is Car {
	return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
	return 'sail' in ship;
}
