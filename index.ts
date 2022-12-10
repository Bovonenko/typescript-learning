// let userName: string = "Ivan";
// userName.isInteger();
// userName = "vasfgsd";

// '', "", ``
// 10, 0.5, 0.00001, -50, 4e10
// true, false

const isBirthday: boolean = true;
let age: number;
const userName: string = 'John';

age = 40;

//////////////////// declaring types in functions

const logBrtMsg = (
	isBirthday: boolean,
	userName: string,
	age: number
): string => {
	if (isBirthday === true) {
		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
	} else if (isBirthday === false) {
		return 'too bad';
	}
	return createError('Error');
};

logBrtMsg(true, userName, 49);
logBrtMsg(isBirthday, userName, age);
logBrtMsg(false, userName, age);

///////////////////// any type

const userData = '{"isBirthday": true, "userName": "John", "age": 40}';

const userObj: {
	isBirthday: boolean;
	userName: string;
	age: number;
} = JSON.parse(userData);
// userData.smt();

let salary: number;
salary = 5000;

////////////////////// never type

function createError(msg: string): never {
	throw new Error(msg);
}

// const smth: never = null;

////////////////////// null and undefined types

const test: null = null;
const test2: any = null;
const test3: any = undefined;
// const test4: string = undefined;   // error
// const test5: number = null;

////////////////////// symbol and bigInt types

let id: symbol = Symbol('id');

const data = {
	[id]: 2,
};

console.log(data[id]);

const num1: bigint = 1n;
const num2: bigint = 2n;

console.log(num1 + num2);
