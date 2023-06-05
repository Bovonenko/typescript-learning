function processingData<T>(data: T): T {
	//...

	return data;
}

const res1 = processingData(1);
const res2 = processingData("1");

const num = 10;

const res3 = processingData<number>(num); 

interface PrintUK {
	design: number
}

interface PrintES {
	design: string
}

interface Print<T> {
	design: T;
}

const somePrint: Print<string> = {
	design: 'ten'
}

const someOtherPrint: Print<number> = {
	design: 19
}

Array<T>

RefferalSystem<UserID, UserReferrals>

T U V S P K/V