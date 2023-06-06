const arr: Array<number> = [1, 2, 3];
const arr2: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ["dvcx"];
const roarr2: readonly string[] = ["dvcx"];

interface IState {
	data: {};
	tag?: string;
}

const state: Partial<IState> = {
	data: {
		name: "hjo",
	},
};

const strictState: Required<IState> = {
	data: {},
	tag: "",
};

function action(state: Readonly<IState>) {
	state.data = "dsaf";
}
