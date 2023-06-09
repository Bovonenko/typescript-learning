class Player {
	private login: string;
	private _password: string;
	server: string;
	protected consent: boolean;

	get password() {
		return this._password;
	}

	set password(newPass: string) {
		// validation
		this._password = newPass;
	}
}

class CompetitivePlayer extends Player {
	rank: number;

	isConsented() {
		this.consent ? "yes" : "no";
	}
}

const player = new CompetitivePlayer();
player.password = "1qaz";
player.consent; // error

// class User {
// 	public email: string;
// 	public name: string;

// 	constructor(email: string, name: string) {
// 		this.email = email;
// 		this.name = name;
// 	}
// }

// class User1 {
// 	constructor(public email: string, public name: string) {}
// }
