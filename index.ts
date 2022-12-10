const departments: string[] = ['dev', 'design', 'marketing'];
const department = departments[0];

// departments.push(4);
const report = departments
	.filter((d: string) => d !== 'dev')
	.map((d: string) => `${d} - done`);

const nums: number[][] = [
	[3, 5, 6],
	[3, 5, 6],
];

const [first] = report;
console.log(first);

// const any: any[] = [3, 5, 6, 'dfs']; // bad practice
