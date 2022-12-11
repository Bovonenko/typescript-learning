let salary: number;
salary = 500;

interface UserData {
	isBirthday: boolean;
	userName: string;
	age: number;
	name: string;
}

const userData = '{"isBirthday": true, "userName": "John", "age": 40}';
const arr = ['sss', 4, true];

const obj: UserData = JSON.parse(userData);
console.log(obj.name);

const isOkay = true;
let movement: boolean | string = false;

if (isOkay) {
	movement = 'moving';
}
