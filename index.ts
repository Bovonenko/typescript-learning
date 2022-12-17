const fetchData = (url: string, method: 'GET' | 'POST'): void => {
	console.log(method);
};

const reqOptions = {
	url: 'https://someurl.com',
	method: 'GET',
};

const str = 'str';
const method = 'GET';

fetchData('qqq', 'GET');
fetchData(reqOptions.url, reqOptions.method as 'GET');

const box = document.querySelector('.box') as HTMLElement;
const input = document.querySelector('input') as HTMLInputElement;

const someNumber: number = +input.value;
console.log(someNumber * 2);

let a = 'value' as const;

let b = { f: 100 } as const;
let c = [] as const;

let value = 'value';
let arr = ['sd', 'dff'];
let obj = { f: 100 };

// let T0 = obj as const;

let T5 = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const;
