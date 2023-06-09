interface IUser {
	login: string;
	password: string;
	token?: number;
}

interface Ivalidation {
	valid: boolean;
	isValid: (data: string) => boolean;
}

class UserForm implements IUser, Ivalidation {
	login: string;
	password: string;
	valid: boolean = false;
	token: number;

	isValid(login: string) {
		return login.length > 3;
	}
}

new UserForm();
