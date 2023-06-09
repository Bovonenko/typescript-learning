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

	checkBoxSize(transport: number): string;
	checkBoxSize(transportes: number[]): string;
	checkBoxSize(transport: number | number[]): string {
		if (Array.isArray(transport)) {
			return transport.some((t) => t >= this.width) ? "Ok" : "not ok";
		} else {
			return transport >= this.width ? "Ok" : "not ok";
		}
	}

	get boxContent() {
		return this._content;
	}

	set boxContent(value) {
		this._content = value;
	}

	async content(value: string) {
		const date = await new Date().toTimeString();
		this._content = `Date: ${date}, Content: ${value}`;
		console.log(this._content);
		// return this._content;
	}
}

const firstBox = new Box(250);
firstBox.volume = 500;
console.log((firstBox.boxContent = "test"));
console.log(firstBox.boxContent);
