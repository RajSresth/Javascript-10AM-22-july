/*const human={
    eat(){console.log(`${this.name} can eat`)},
    sleep(){console.log(`${this.name} can sleep`)}
}

const user={
    name:"chombu"
}
user.__proto__=human;

console.log(user.name)
user.sleep()
user.eat()
*/


/* Parent Object
const animal={
    type:'animal',
    sound(){
        console.log(`${this.name} can sound`);
    }
}

//child object
const dog={
    name:"BOB",
    bark(){
        console.log("Woooo Wooooo");
    }
}

Object.setPrototypeOf(dog,animal)
const parent=Object.getPrototypeOf(dog)
console.log(parent===animal)

// dog.sound()
// dog.bark()

// console.log(dog.hasOwnProperty("sound"))
// console.log(dog.hasOwnProperty("bark")) */

const animal={
    type:"Animal",
    sound(){
        console.log(`${this.name} can sound..!!`)
    }
}

const human=Object.create(animal,{name:{
                                        value:"Rabir Kapoor",
                                        writable:false,
                                        enumerable:false,
                                        configurable:false
                                         },
                                   age:{
                                            value:40,
                                            writable:false,
                                            enumerable:false,
                                            configurable:false
                                            }
                                  })

human.name="Alia Bhatt"                   
// delete human.age
console.log(human.name)
                                  

