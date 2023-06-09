interface IEngine {
	model: string;
	capacity: number;
	startEngine: (time: Date) => string;
}

abstract class AbsractVehicle {
	model: string;
	capacity: number;
	abstract startEngine: (time: Date) => string;
	stopEngine(time: Date): string {
		this.startEngine(new Date())
		return 'Engine stopped'
	}
}

class Vehicle extends AbsractVehicle {
	startEngine = (time: Date) => {
		return "Started";
	};
}

new Vehicle().