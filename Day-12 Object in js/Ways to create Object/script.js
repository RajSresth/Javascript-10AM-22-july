/* 1. By using curly braces { } and literals.

//const obj={}  empty object

const obj={"name":"chombu"}
console.log(obj)
*/

/*2. By using new keyword and Object Constructor 

// const obj=new Object() empty object

const obj=new Object({name:"Tinku",age:24})
console.log(obj) */

/*3. By using new keyword and Constructor function 

function CreateObject(name,age,pin)
{   
        this.userName=name;
        this.userAge=age;
        this.userPin=pin;
}

const obj=new CreateObject("Tinku",24,201301);
console.log(obj)*/

/* 4. By using class 
class Car
{
    constructor(name,price,color)
    {
        this.name=name;
        this.price=price;
        this.color=color;        
    }
}

const toyota=new Car("Fortuner",'48L','Black')
console.log(toyota)*/


/* Topic:- How to access an Object

const obj={
                name:"chombi",
                age:16,
                state:"UP",
                gf:5
            }
console.log("state" in obj) //true or false
delete obj.gf  //to delete a key
console.log(obj) */

/* Shallow Copy
const jack={
    cake:'Chocolate Cake'
}

const oggy=jack;
oggy.cake="Butterscottch Cake";


if(jack.cake==="Chocolate Cake"){
    console.log("Tod dunga Fod Dunga")
}
else{
    console.log("Aee bille tera cake tera bhai le gaya")
} */


    const obj={
        name:"Tinku",
        age:24,
        city:"Noida"
    }

    for(val in obj)
    {
        console.log(val)
    }