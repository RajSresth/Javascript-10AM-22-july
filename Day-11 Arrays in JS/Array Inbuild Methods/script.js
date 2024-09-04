/*1. push()
const arr=[1,2,3,4,5]

const result=arr.push(10)
console.log(arr)
console.log(result) */

/* pop()
const arr=[1,2,3,4,5,16] 
const res=arr.pop()
console.log(arr)
console.log(res) */


/* unshift() 
const users=["John","Troy"];
const res=users.unshift("Tinku")
console.log(users)
console.log(res) */

/* shift() 
const users=["Tinku","John","Troy"];
const res=users.shift()
console.log(users)
console.log(res)*/

/* splice(a,b,c) 
// Insertion

const arr=[1,2,5,6]
const res=arr.splice(2,0,3,4)
console.log(arr)
console.log(res) 

//Deletion
const comedy=["Dhamal","Tubelight","Race-3","Welcome"]
comedy.splice(1,2)
console.log(comedy)


//updaction
const comedy=["Dhamal","Tubelight","PHP","Race-3","Welcome"]
comedy.splice(1,3,"PHP")
console.log(comedy)*/

/*
const yt=["Carry","Ashish","Harsh","Sandeep Maheshwari","Vivek Bindra","Elvish Yadav","","BB","Purav"]
const speaker=yt.slice(a=3,b=5)
console.log(speaker) */

/*const users=["Tinku","Chombi","Komal","Neeraj"]
const users=["Tinku","Chombi","Komal"]


// const females=users.slice(a=1,b=3)
const females=users.slice(a=1)
console.log(females)
console.log(users) */

/*
const users=["Tinku","Chombi","Chombu","Komal"]
const myArray=users.slice(1)
// ["Chombi","Chombu","Komal"]
myArray.splice(1,1)
console.log(myArray)
*/


/* reverse()
const arr=[1,2,3,4,5]
console.log(arr.reverse()) */


/*indexOf()

const arr=["Ravi","Sunny","Raj","Sunny"]

// console.log(arr.indexOf("John"))   //:- index of an element -1
console.log(arr.indexOf("Sunny",2)) */

/* includes()
const arr=["Ravi","Sunny","Raj","Mohit","Komal"]
console.log(arr.includes("Komal")) */


/*
const arr=[5,3,4,2,1,10]
const res=arr.sort((a,b)=>a-b) //Ascending Order
// arr.sort((a,b)=>b-a) Descending Order

console.log(arr) 
console.log(res)*/

// foreach(callback)

/*
let arr=[1,2,3,4,5]   //output:[10,20,30,40,50]
let output=[]         //empty array

const res=arr.forEach((val,index,arr)=>{
    output.push(val*10)
})

console.log(output)
console.log(res) */

/*
let arr=[5,15,25,35,45]
const output=[]

arr.forEach(val=>{
    output.push(Math.floor(val/2))
})

console.log(output) */

/*
let arr=[10,20,30,40,50]
let sum=0;

arr.forEach(val=>{
    sum=sum+val;
})

console.log(`Sum is: ${sum}`) */

/*
const arr=[1,2,3,4,5]

arr.forEach((val,i,array)=>{
     array[i]=val**2
})
console.log(arr)

arr.forEach((val,i,array)=>{
    array[i]=Math.sqrt(val)
})
console.log(arr) */

/*
let arr=[1,2,3,4,5]
let sum=0;
const output=arr.map((val,index,array)=>{
    sum=sum+val
})
console.log(sum)  */

/*
let arr=[1,2,3,4,5]
let output=[]
output.push(arr.reduce((acc,val,index,array)=>{
    acc=acc+val;   
    return acc;
},0))
      
console.log(output) */



/* filter() Method
let arr=[10,20,30,40,50];
const res=arr.filter((val,index,array)=>val>30)
console.log(res) */


/*flat() Method
let arr=[1,2,[3,4],5,[6,7,[8,9]],10]
const res=arr.flat(2)
console.log(res)
*/

/*Array.isArray() Method

let arr=[]
let arr1={}
let arr2="String"
console.log(Array.isArray(arr))
console.log(Array.isArray(arr1))
console.log(Array.isArray(arr2)) */

/* Array.from() Method
let name="Ravi"
const res=Array.from(name)
console.log(res)
*/


