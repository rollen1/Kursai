const wick = {
    firstName: 'John',
    lastName: 'Wick',
    age: 56
}

const wickMore = {
    gender: 'Male',
    hobby: 'Assassinations',
    height: 185
}

const test = console.log(Object.assign(wick, wickMore))


console.log(test)

// values

const finance = {
    q1: 200,
    q2: 300,
    q3: 300,
    q4: 300,
}

const financeSum = Object.values(finance).reduce((a, b) => a + b);

console.log('values', Object.values(wickMore))
console.log(financeSum)