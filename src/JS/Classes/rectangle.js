class Rectangle {
    constructor(_width, _height) {
        this.width = _width;
        this.height = _height;
    }

    getArea()
}

const rectangle1 = new Rectangle(10, 10);
const rectangle2 = new Rectangle(15, 5);

console.log(rectangle1);

class Animal {
    constructor({_age, _name}) {
        this.age = _age;
        this.name = _name;
    }

    speak() {
        console.log('this.sound')
    }
}

class Dog extends Animal {
    constructor() {
        this.type = 'Dog'
        this.says = 'Woof woof'
    }
}

const animal1 = new Animal({_age: 2, _name: 'Dogis'})
const dog1 = new Dog({_age: 2, _name: 'Dogis'})

console.log(animal1);

console.log(dog1);

animal1.speak();
dog1.speak();


const newList = new ToDoList({_array: ['asd', 'asds', 'zxczx', 'xdgdg']})

addButton.onclick = () => newList.add(input.value);