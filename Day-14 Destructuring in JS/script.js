/* const obj={
    name:"Tinku",
    age:24,
    city:"Noida"
}

const {name}=obj

console.log(name) */

/* Array Destructuring 
const movies=["PHP","Welcome","Golmal"]

const [a,,c]=movies;
console.log(a)
console.log(c)*/

/*
const users={
    name:["Amit","Aditya","Amrita","Jagmeet","Aasif","Jatin","Manish"],
    salary:{
        sal1:"1LPA",
        sal2:"2LPA",
        sal3:"3LPA",
        sal4:"4LPA",
        sal5:"5LPA",
        sal6:"6LPA",
        sal7:"7LPA",
        
    }
}
const {name,salary} =users
// Array Destructuring
const [u1,,,,,,u7]=name
console.log(u1)
console.log(u7)

// Object Destructuring
const {sal1,sal7}=salary
console.log(sal1)
console.log(sal7)  */


const users={
    name:["Amit","Aditya","Amrita","Jagmeet","Aasif","Jatin","Manish"],
    salary:{
        sal1:"1LPA",
        sal2:"2LPA",
        sal3:"3LPA",
        sal4:"4LPA",
        sal5:"5LPA",
        sal6:"6LPA",
        sal7:"7LPA",        
    }
}
// const {name:[u1,,,,,,u7],salary:{sal1,sal7}} =users
// console.log(sal1)
// console.log(sal7) 

Object.freeze(users)
const updatedUsers={
    ...users
}
updatedUsers.salary.sal7="8LPA"
console.log(users)
console.log(updatedUsers)



