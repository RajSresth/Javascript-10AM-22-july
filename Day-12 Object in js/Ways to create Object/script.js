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

/*
   const jack={
                cake:"Chocolate",
                price:'$5'
                }

  const oggy={}  //Empty Object

  for(element in jack)
  {
    oggy[element]=jack[element]
  }

  delete oggy.cake;

  console.log(oggy)
  console.log(jack)   */

/* Deep copy in array  using:- for in loop
  const arr1=[10,20,30];
  const arr2=[];

  for(index in arr1)
  {
    arr2[index]=arr1[index]
  }

  console.log(arr2) */



/* Deep Copy in Array Using for of loop

const users=["Ravi","Shubham","Komal"];

const newArr=[]

for(val of users)
{
    // console.log(val)
    newArr.push(val)
}

newArr.push("Nisha")
console.log(users)
console.log(newArr)*/


/* Behaviours (Method) inside an Object

const actor={
    name:'Amir Khan',
    dialog:function(msg){
        console.log(`Eee wrang namber h..!!`)
        console.log(msg)
        return `Pk h Ka`
    }
}

// How to call a method
const res=actor.dialog(`Mari choriyan choro se kam h ke`)
console.log(res) */


// create a method using arrow function
const singers=[
                {
                    name:'kk',
                    song:()=>console.log(`Ajab si`)
                },
                {
                    name:'Himesh',
                    song:()=>console.log(`Onnnnnnn Hooosur tera tera teraaaan suroooor..`)
                },
                {
                    name:'Gian',
                    song:()=>console.log(`Me hu gian`)
                }
            ]

singers.map(val=>{
        if(val.name==="Himesh")
        {
            val.song()
        }
})

    




 

                