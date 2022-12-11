const userDataTuple: [boolean, number, ...string[]] = [
	true,
	40,
	'John',
	'Alex',
	'Ann',
];
// userDataTuple[3];
// userDataTuple.push(40);
// userDataTuple[3];

const res = userDataTuple.map((t) => `${t} - data`);
const [bthd, age, userName] = userDataTuple;
