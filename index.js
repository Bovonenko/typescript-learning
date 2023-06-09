var jsonTest = '{"name": "Test", "data": 4}';
var objFromJson = JSON.parse(jsonTest);
var toDoList = [];
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// 	.then((res) => res.json())
// 	.then((json) => {
// 		if ("id" in json) {
// 			toDoList.push(json);
// 		}
// 		console.log(toDoList);
// 	});
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (res) { return res.json(); })
    .then(function (json) {
    if ("id" in json) {
        toDoList.push(json);
    }
    else if (Array.isArray(json)) {
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    console.log(toDoList);
});
