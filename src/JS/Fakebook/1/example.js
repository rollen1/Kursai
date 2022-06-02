const index = 3
const key = 'c';
const array = [1, 2, 3, 4, 5]

const objectArray = [{ a: 1, b: 2, c: 3 }, { a: 'x', b: 2, c: 3 }, { a: true, b: 2, c: 3 }]

for (let i = 0; i < array.length; i++) {
    console.log('array[index]', i, array[i])
}

objectArray.map((object) => {
    console.log('item.a', object.a)
})

const array2 = ['asd', 2, 3, true, { a: 1 }, null];
const object2 = { a: 'asd', b: true, c: null, d: { a: '' } }

array2.map(sadghiasdghisdhgi => {
    console.log(sadghiasdghisdhgi)
})