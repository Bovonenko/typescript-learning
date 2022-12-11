type ValidAmount = 'empty' | number;
// структура данных склада с одеждой

interface ClothesWarehouse {
	jackets: ValidAmount;
	hats: ValidAmount;
	socks: ValidAmount;
	pants: ValidAmount;
}

// структура данных склада с канцтоварами

interface StationeryWarehouse {
	scissors: ValidAmount;
	paper: 'empty' | boolean;
}

// структура данных склада с бытовой техникой

interface AppliancesWarehouse {
	dishwashers: ValidAmount;
	cookers: ValidAmount;
	mixers: ValidAmount;
}

// общая структура данных, наследует все данные из трех выше
// + добавляет свои

interface TotalWarehouse
	extends ClothesWarehouse,
		StationeryWarehouse,
		AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

// главный объект со всеми данными, должен подходить под формат TotalWarehouse

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: 'empty',
	socks: 'empty',
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: 'empty',
	mixers: 14,
	deficit: false,
	date: new Date(),
};

// Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
// и возвращает всегда строку
// Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
// и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

// С данным объектом totalData строка будет выглядеть:
// "We need this items: hats, socks, cookers"
// Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.

function printReport(data: TotalWarehouse): string {
	// let neededItems: string[] = [];
	// for (let key in data) {
	// 	if (data[key as keyof typeof data] === 'empty') {
	// 		neededItems.push(key);
	// 	}
	// }
	const result: string = Object.entries(data)
		.filter((item) => item[1] == 'empty')
		.reduce((total, item) => total + ' ' + item[0] + ',', '');

	return result
		? `We need this items:${result.slice(0, -1)}`
		: 'Everything fine';
}

console.log(printReport(totalData));
