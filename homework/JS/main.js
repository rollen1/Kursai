const calcElement = document.getElementById('calcinput');
const calcElementValue = calcElement.value;
const calcElementValueNumber = Number(calcElementValue);

let x = 2;
const totalValue = calcElementValueNumber + x

function calc() {
    console.log(totalValue);
}

if (totalValue > 10) {
    console.log('The value is more than 10')
} else if (totalValue < 10) {
    console.log('The value is less than 10')
} else {
    console.log('No defined value')
}

