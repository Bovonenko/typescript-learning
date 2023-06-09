class Box {
	width: number;
	height: number = 500;
	volume: number | undefined;
	_content: string | undefined;

	constructor(width: number, volume?: number, content?: string) {
		this.width = width;
		this.volume = volume;
		this._content = content;
	}

	calculateVolume(): void {
		if (!this.volume) {
			this.volume = this.width * this.height;
			console.log(`Volume is: ${this.volume}`);
		} else {
			console.log(`Volume is: ${this.volume}`);
		}
	}

	async content(value: string) {
		const date = await new Date().toTimeString();
		this._content = `Date: ${date}, Content: ${value}`;
		console.log(this._content);
		// return this._content;
	}
}

const firstBox = new Box(250);
console.log(firstBox);

class Styles {
	[s: string]: string | ((s: string) => boolean);

	method(s: string) {
		return true;
	}
}

const style = new Styles();
style.color = "red";
style.font = "roboto";

class PresentBox extends Box {
	wrap: string;
	height: number = 600;

	constructor(wrap: string, width: number) {
		super(width, 400);
		this.height = 342;
		this.wrap = wrap;
	}

	override async content(value: string, text?: string) {
		const date = await new Date().toTimeString();

		if (!text) {
			super.content(value);
		} else {
			this._content = `Date: ${date}, Content: ${value}, Text: ${
				text ? text : "No text"
			}`;
		}
		console.log(this._content);
		// return this._content;
	}
}

const presentBox = new PresentBox("red", 34).content("TV", "Etext");
