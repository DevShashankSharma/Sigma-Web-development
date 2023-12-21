// let obj = {
//     name: 'shashank',
//     age: 21
// }

// console.log(obj)


// let animal = {
//     eats : true
// }

// let rabbit = {
//     jumps : true,
//     // __proto__: animal
// }

// rabbit.__proto__ = animal // it sets the prototype of rabbit to animal


class Animal {

    constructor(name, age) {
        // console.log('I am an animal');
        
        this.name = name;
        this.age = age;
    }
    eats() {
        console.log("Kha raha hu");
    }
    jumps() {
        console.log("Kood raha hu");
    }
}

class Lion extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    eats() {
    super.eats();
    console.log("Kha raha hu ro raha hu");
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

let a = new Animal('shashank', 21) ;
console.log(a)

let l = new Lion('Shera', 21)
console.log(l)

console.log(l.name)

l._name = 'shashank'
console.log(l.name);
console.log(l._name)


console.log(l instanceof Animal)
console.log(a instanceof Lion)
