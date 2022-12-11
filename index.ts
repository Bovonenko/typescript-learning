interface User {
	login: string;
	password: string;
	age: number;
	// addr?: string;
	addr: string | undefined;
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

const dName = '12345';

function sendUserData(obj: User, db?: string): void {
	console.log(obj.parrents?.father?.toLowerCase, db?.toLocaleLowerCase());
}
