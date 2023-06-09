class Box {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}
}

const firstBox = new Box(250, 30);
console.log(firstBox);

class User {
	name: string;
}

const ivan = new User();
ivan.name = "Ivan";

console.log(ivan);
