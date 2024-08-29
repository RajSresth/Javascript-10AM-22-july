// const greet=name=>console.log(`Good Morning ${name}`);
// greet("Rohan")


/* Sum of two numbers:- 10,20
const findSum=(a,b)=>console.log(`Sum is: ${a+b}`)
findSum(10,20) */

/* find power
const findPower=(base,exponent)=>base**exponent;
const result=findPower(5,2)
console.log(result) */

/* Explicit Return
const findPower=(base,exponent)=>{
    const pow=base**exponent;
    console.log(`${base}**${exponent}=${pow}`)

    return pow;
}
const output=findPower(5,3)
console.log("Output is:",output) */

const greet=function(a,b){
    console.log(a)
    console.log(b)
    return `Aasif`
}

// console.log(greet) ---> f(){} entire function code
// console.log(greet(5,5)) ---->retuned value
console.log(greet(5,10))