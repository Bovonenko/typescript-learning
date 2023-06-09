function setName() {
	return "COD";
}

class Player {
	private static game: string;

	#login: string;
	private _password: string;
	server: string;
	protected consent: boolean;

	static {
		Player.game = setName();
	}

	// private constructor() {}  makes static class

	get password() {
		return this._password;
	}

	set password(newPass: string) {
		// validation
		this._password = newPass;
	}

	static getGameName() {
		return Player.game;
	}
}

const player = new Player();
player.password = "1qaz";

// class CompetitivePlayer extends Player {
// 	rank: number;

// 	isConsented() {
// 		this.consent ? "yes" : "no";
// 	}
// }
// console.log(CompetitivePlayer.getGameName());
