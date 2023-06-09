class Player {
	private login: string;
	private _password: string;
	server: string;

	constructor(login: string) {
		this.login = login;

		this.logIn = this.logIn.bind(this);
	}

	get password() {
		return this._password;
	}

	set password(newPass: string) {
		// validation
		this._password = newPass;
	}

	logIn = () => {
		return `Player ${this.login} online!`;
	};

	connect() {
		// Do smth
		return this;
	}

	isPro(): this is CompetitivePlayer {
		return this instanceof CompetitivePlayer;
	}
}

// const test = player.logIn;
// test();

class CompetitivePlayer extends Player {
	rank: number;

	checkLogin() {
		return this.logIn();
	}
}
const player = new Player("kaban4ik");
console.log(player.connect().logIn());

const player2 = new CompetitivePlayer("kaban");
console.log(player2.connect().logIn());

const somePlayer: Player | CompetitivePlayer = new CompetitivePlayer("Test3");

somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer);

// console.log(player2.checkLogin());
