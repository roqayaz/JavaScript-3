// # STORY

// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Person {
    constructor (name, age, location, married, children, job, favFood, hobby){
        this.name = name;
        this.age = age;
        this.location = location;
        this.married = married;
        this.children = children;
        this.job = job;
        this.favFood = favFood;
        this.hobby = hobby
    }
}

class Animal {
    constructor (name, age, color, food, job){
        this.name = name;
        this.age = age;
        this.food = food;
        this.job = job   
    }
}

const person = new Person('Abdulkareem', 35, 'Riyadh', true, 3, 'construction worker', 'dates', 'smoke water pipe')
const animal = new Animal('Adel',15 ,'brown', 'grass', 'helps transport materials')