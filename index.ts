type Currencies = {
	usa: "usd";
	china: "cny";
	ukraine: "uah";
	kz: "tenge";
};

type CurrWithoutUSA = Omit<Currencies, "usa">; // исключение
type CurrUSAAndUkraine = Pick<Currencies, "ukraine" | "usa">; // filtering
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">;

type FadeType = Exclude<MyAnimation, "swipe">; // deleting from union type
type SwipeType = Extract<MyAnimation | Direction, "swipe">; // select needed type

type CreateCustomCurr<T> = {
	[P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";
type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies>;

const gameData: GameDataCurr = {
	alex: {
		customChina: "czxv",
		customUsa: "cxvz",
		customKz: "vxz",
		customUkraine: "cvasr",
	},
	john: {
		customChina: "czxv",
		customUsa: "cxvz",
		customKz: "vxz",
		customUkraine: "cvasr",
	},
};

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
