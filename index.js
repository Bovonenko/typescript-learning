var fetchData = function (url, method) {
    console.log(method);
};
var reqOptions = {
    url: 'https://someurl.com',
    method: 'GET'
};
var str = 'str';
var method = 'GET';
fetchData('qqq', 'GET');
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector('.box');
var input = document.querySelector('input');
var someNumber = input.value;
console.log(someNumber * 2);
