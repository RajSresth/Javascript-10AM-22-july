/* function cart(a,b,...c)
{
 console.log(a)
 console.log(b)
 console.log(c)
}

cart("Maggie","Ice-cream","Biscuit","Bottle","Kitkat","Perfume","Makeup") */


/* Rest Operator usecase with an Array 

const movies=["PHP","Welcome","Dhamaal","Dhol","Housefull 2"]

// Destructuring
const [a,b,...c]=movies

console.log(a)
console.log(b)
console.log(c)
*/

// Rest Operator usecase with an Object

const obj={
    name:"Chombu",
    age:24,
    isWorking:true,
    sal:'35k',
    state:"UP",
    city:"Noida"
}

// Destructuring
// const {name,age,isWorking,sal,state,city}=obj

const {...val}=obj
console.log(val)



