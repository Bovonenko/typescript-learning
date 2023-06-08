interface ICompany {
	name: string;
	debts: number;
	departments: Department[];
	management: {
		owner: string;
	};
}

interface Department {
	[key: string]: string;
}
const debtss = "debts";
type CompanyDebtsType = ICompany[typeof debtss];
type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDepartmentsType = ICompany["departments"][number];
type CompanyDepartmentsTypeS = ICompany["departments"];
type Test = ICompany[keyof ICompany];

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "debts";

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: ICompany = {
	name: "Google",
	debts: 5500,
	departments: [
		{
			sales: "sales",
			developer: "dev",
		},
	],
	management: {
		owner: "John",
	},
};

printDebts(google, "name", "debts");

type googleKeys = keyof typeof google;
const keyys: googleKeys = "name";
