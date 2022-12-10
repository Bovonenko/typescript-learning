const userData = {
	isBirthdayData: true,
	age: 40,
	userName: 'John',
	messeges: {
		error: 'Error',
	},
};

const createError = (msg: string) => {
	throw new Error(msg);
};

function logBrtMsg({
	isBirthdayData,
	age,
	userName,
	messeges: { error },
}: {
	isBirthdayData: boolean;
	age: number;
	userName: string;
	messeges: { error: string };
}): string {
	if (isBirthdayData) {
		return `Congrats ${userName.toUpperCase()}, age: ${age + 1}`;
	} else {
		return createError('error');
	}
}

console.log(logBrtMsg(userData));
