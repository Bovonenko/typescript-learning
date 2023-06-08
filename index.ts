interface ICompany {
	name: string;
	debts: number;
}

type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "debts";

function printDebts<T, K extends keyof T, S extends keyof T>(
	company: T,
	name: K,
	debts: S
) {
	console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
	name: "HH",
	debts: 5000,
};

printDebts(hh, "debts", "name");

const google = {
	name: "Google",
	open: "true",
};

printDebts(google, "name", "open");

type googleKeys = keyof typeof google;
const keyys: googleKeys = "name";
