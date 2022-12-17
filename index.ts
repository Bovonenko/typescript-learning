// let smth: unknown;

// smth = 'str';

// let data: string[] = smth;
// data.find((e) => e);

// const someValue: unknown = 10;
// someValue.method();

function fetchData(data: unknown): void {
	if (typeof data === 'string') {
		console.log(data.toLocaleLowerCase());
	}
}

const userData = '{"isBirthday": true, "userName": "John", "age": 40}';

function safeParse(s: string): unknown {
	return JSON.parse(s);
}

const data = safeParse(userData);

function transferData(d: unknown): void {
	if (typeof d === 'string') {
		console.log(d.toLocaleLowerCase());
	} else if (typeof d === 'object' && d) {
		console.log(data);
	} else {
		console.error('some error');
	}
}

transferData(data);

try {
	if (1) {
		throw new Error('error');
	}
} catch (e) {
	if (e instanceof Error) {
		console.log(e.message);
	} else if (typeof e === 'string') {
		console.log(e);
	}
}

type T0 = any | unknown;
type T1 = number | unknown;
type T2 = any & unknown;
type T3 = number & unknown;
