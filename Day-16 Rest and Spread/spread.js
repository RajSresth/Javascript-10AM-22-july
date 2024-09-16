//spread Operator inside a function

const items=["perfume","shirt","ice-cream"]

function details(...i)   //Rest Operator
{
    console.log(i)
}

// call
details(...items)    //spread Operator


/* spread operator use case inside an array

const arr1=[10,20]
const arr2=[20,30]
const arr3=[...arr1,...arr2]
console.log(arr3) */


// Spread Operator use case inside an Object

const obj1={
    name:"Chombu",
    age:21
}
const obj2={
    city:"Noida",
    pin:201301
}

const user={...obj1,...obj2}
console.log(user)