// [2] === [2] 
// {} === {}
//Both of these are false. They might have the same value, but they are separate items which live in different places in the memory.

// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

//object2 and object3 are the same as object1, and so therefore = 4. object4 is a different object which has not been altered and therefore = 5.

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
class Mammal extends Animal {
    constructor(name, color){
        super(name, "mammal", color);
    }
    sound(meow) {
        return `Meet my ${this.color} ${this.type} named ${this.name}. He usually just says ${meow}.`;
    }
}

const myMammal = new Mammal ("Tati", "black");
console.log(myMammal.sound);


// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mammal("Trotster", "white");
console.log(farmerCow);

