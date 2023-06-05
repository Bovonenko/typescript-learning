var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
var btns = document.querySelectorAll(".btn");
var emailInput = document.querySelector("#email");
var titleInput = document.querySelector("#title");
var checkboxInput = document.querySelector("#checkbox");
var textInput = document.querySelector("#text");
btns.forEach(function (btn) {
    var btnElem = btn;
    btnElem.addEventListener("click", function (e) {
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
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    var values = Object.values(data);
    var areValid = true;
    for (var i = 0; i < values.length; i++) {
        if (!values[i]) {
            areValid = false;
            break;
        }
    }
    if (areValid) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    var emailExists = emails.includes(email);
    // Если email совпадает хотя бы с одним из массива
    if (emailExists) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
