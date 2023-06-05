interface Data {
	email: string;
	title: string;
	text: string;
	checkbox: boolean;
}

const formData: Data = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

const forms = document.querySelectorAll("form");
const emailInput = document.querySelector("#email") as HTMLInputElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const checkboxInput = document.querySelector("#checkbox") as HTMLInputElement;
const textInput = document.querySelector("#text") as HTMLInputElement;

forms.forEach((form) => {
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		formData.title = titleInput.value;
		formData.text = textInput.value;
		formData.checkbox = checkboxInput.checked;
		formData.email = emailInput.value;
		if (validateFormData(formData)) {
			checkFormData(formData);
		}
	});
});

function validateFormData(data: Data) {
	// Если каждое из свойств объекта data правдиво...

	if (Object.values(data).every((value) => value)) {
		return true;
	} else {
		console.log("Please, complete all fields");
		return false;
	}
}

function checkFormData(data: Data) {
	const { email } = data;
	const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

	// Если email совпадает хотя бы с одним из массива
	if (emails.some((e) => e === email)) {
		console.log("This email already exists");
	} else {
		console.log("Posting data...");
	}
}
