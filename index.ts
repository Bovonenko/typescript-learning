import "reflect-metadata";

interface ICuboid {
	width: number;
	length: number;
	height: number;
	calcArea: (multiply?: number) => number;
	calcVolume: (multiply?: number) => number;
}

@createdAt
class ShippingContainer implements ICuboid {
	@IsInt()
	@Min(1)
	width: number;

	@IsInt()
	@Min(1)
	length: number;

	@IsInt()
	@Min(1)
	@Max(8)
	height: number;

	constructor(width: number, length: number, height: number) {
		this.width = width;
		this.length = length;
		this.height = height;
		validate(this, "width", width);
		validate(this, "height", height);
		validate(this, "length", length);
	}

	@lastCalculation
	calcArea(multiply?: number): number {
		return this.width * this.length * (multiply ? multiply : 1);
	}

	@lastCalculation
	calcVolume(multiply?: number) {
		return (
			this.width * this.length * this.height * (multiply ? multiply : 1)
		);
	}
}

function IsInt() {
	return function (target: Object, propertyName: string | symbol) {
		Reflect.defineMetadata("IsInt", true, target, propertyName);
	};
}

function Max(limit: number) {
	return function (target: Object, propertyName: string | symbol) {
		Reflect.defineMetadata("Max", limit, target, propertyName);
	};
}

function Min(limit: number) {
	return function (target: Object, propertyName: string | symbol) {
		Reflect.defineMetadata("Min", limit, target, propertyName);
	};
}

function validate(target: Object, propertyKey: string, value: any) {
	if (
		Reflect.getMetadata("IsInt", target, propertyKey) &&
		!Number.isInteger(value || value !== parseInt(value))
	) {
		throw new Error(propertyKey + " not integer");
	}

	if (
		Reflect.hasMetadata("Min", target, propertyKey) &&
		value < Reflect.getMetadata("Min", target, propertyKey)
	) {
		throw new Error(
			`min value for ${propertyKey} is ${Reflect.getMetadata(
				"Min",
				target,
				propertyKey
			)}`
		);
	}

	if (
		Reflect.hasMetadata("Max", target, propertyKey) &&
		value > Reflect.getMetadata("Max", target, propertyKey)
	) {
		throw new Error(
			`Max value for ${propertyKey} is ${Reflect.getMetadata(
				"Max",
				target,
				propertyKey
			)}`
		);
	}
}

function createdAt<T extends { new (...arg: any[]): {} }>(constructor: T) {
	return class extends constructor {
		createdAt = new Date();
	};
}

function lastCalculation(
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
): PropertyDescriptor | void {
	const oldValue = descriptor.value;
	descriptor.value = function (this: any, ...args: any[]) {
		this.lastCalculation = `Последний подсчет ${String(
			propertyKey
		)} был ${new Date()}`;
		return oldValue.apply(this, args);
	};
}

// 1. Необходимо создать декоратор класса, который будет записывать дату создания контейнера
// Простыми словами - создавать в нем новое свойство createdAt с датой создания экземпляра

// 2. Необходимо создать декораторы IsInt, Min и Max, которые будут валидировать свойства класса
// Применение смотрите в самом классе. При ошибке выполняйте throw new Error
// IsInt проверяет на то, что было передано целое число

// 3. Необходимо создать декоратор метода, который при каждом запуске метода будет создавать
// ИЛИ менять содержимое свойства самого класса lastCalculation
// Как значение записывать в него строку "Последний подсчет ${method} был ${Дата}",
// Где method - это название подсчета, который передается при вызове декоратора (площадь или объем)

type ShippingContainerData = {
	lastCalculation: string;
	createdAt: Date;
};

const container = new ShippingContainer(10, 100, 7) as ICuboid &
	ShippingContainerData;
container.width = 2;
container.height = 4;
console.log(container.calcVolume());
console.log(container.calcArea());
console.log(container);
finalValidate(container);

function finalValidate(obj: unknown) {
	if (obj && typeof obj === "object" && !Array.isArray(obj)) {
		for (let key in obj) {
			validate(obj, key, obj[key as keyof typeof obj]);
		}
	}
}
