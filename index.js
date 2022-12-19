function printMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === 'number') {
        console.log(msg);
    }
    else {
        console.log(msg);
    }
    console.log(msg);
}
printMsg(3);
var box = document.querySelector('.box');
box === null || box === void 0 ? void 0 : box.addEventListener('click', function () { });
