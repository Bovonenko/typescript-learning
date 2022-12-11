const TOP = 'Top';
const RIGHT = 'Right';

enum Directions {
	TOP,
	RIGHT,
	LEFT,
	BOTTOM,
}

enum TiminigFunc {
	EASE = 'ease',
	EASE_IN = 'ease-in',
	LINEAR = 'linear',
}

enum TiminigFuncN {
	EASE = 1,
	EASE_IN = 10,
	LINEAR = EASE * 2,
}

function frame(elem: string, dir: Directions, tFunc: TiminigFuncN): void {
	if (dir === Directions.RIGHT) {
		console.log(tFunc);
	}
}

frame('id', Directions.RIGHT, TiminigFuncN.LINEAR);
