const input = document.getElementById('text')
const lorem = document.getElementById('lorem');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

function paverstiDidziosiomis() {
    console.log(input.value.toUpperCase());
    input.value = input.value.toUpperCase();
}

function doesTextIncludeString() {
    return lorem.textContent.toLowerCase().includes(input.value.toLowerCase())
}

function checkIfTextExistsAndReplaceToBold() {
    if (doesTextIncludeString()) {
        lorem.innerHTML = lorem.textContent.toLowerCase().replace(input.value.toLowerCase(), input.value.bold());
    }
}

function concatText() {
    console.log(input1.value.concat(' ', input2.value));
}

function getTextLength() {
    console.log(input.value.length);
}
