/*function outer()
{
    console.log("Inside Outer Function")

    function inner()
    {
        console.log("Inside Inner Function")
    }
   
    return inner;
}

const result=outer()
result() */

/* Lexical Scoping

var user="Ravi";

function printMsg()
{
    let use="Raj"
    console.log(`Good Morning ${window.user}`)
}
printMsg() */

/*Closure

function parent()
{
    console.log("Inside Parent Function")
    const a=10;

    function child()
    {
        console.log("Inside Child Function")
        console.log(a)
    }
    return child;
}
const result=parent()
result()
*/