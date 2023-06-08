type Currencies = {
	usa: "usd";
	china: "cny";
	ukraine: "uah";
	kz: "tenge";
};

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
