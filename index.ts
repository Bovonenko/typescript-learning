interface ProcessingFn {
	<T>(data: T): T;
}

function processin<T>(data: T): T {
	return data;
}

let newFunc: ProcessingFn = processin;
let fn: <T>(arg: T) => T = <T>(arg: T): T => {
	return arg;
};

type Smth<T> = T;

const num: Smth<number> = 5;

interface ParentsOfUser {
	mother: string;
	father: string;
}

interface User<ParentsData extends ParentsOfUser> {
	login: string;
	age: number;
	parents: ParentsData;
}

const user: User<{ mother: string; father: string; maried: boolean }> = {
	login: "dfa",
	age: 2,
	parents: { mother: "Anna", father: "no data", maried: true },
};

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

function depositMoney<T extends number | string>(money: T): T {
	console.log(`req to server with amount: ${money}`);
	return money;
}

depositMoney(400);
depositMoney("400");
