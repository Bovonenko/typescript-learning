interface User {
	readonly login: string;
	password: string;
	age: number;
	// addr?: string;
	readonly addr?: string | undefined;
	parrents?: {
		mother?: string;
		father?: string;
	};
}

const user: User = {
	login: 'first',
	password: 'qwerty',
	age: 50,
	addr: 'fsdhfjksa',
};

const userFreeze: Readonly<User> = {
	login: 'first',
	password: 'qwerty',
	age: 50,
	addr: 'fsdhfjksa',
};
userFreeze.age = 4545;

user.login = 'fsdfa';

const dName = '12345';

function sendUserData(obj: User, db?: string): void {
	console.log(obj.parrents?.father?.toLowerCase, db?.toLocaleLowerCase());
}

const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];
// basicPorts[0] = 5;

basicPorts.push();

// const basicPorts: readonly [number, ...string[]] = [3000, '3001', '5555'];
// basicPorts[0] = 5;

// basicPorts.push();
