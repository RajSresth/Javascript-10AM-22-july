// const inc=document.getElementById("inc")
// const dec=document.getElementById("dec")
// const res=document.getElementById("res")
const display=document.getElementById("display")

//create a count variable
let count=0;
display.textContent=count

// Increment funtion
function increment()
{
    count++;
    display.textContent=count;
}


//Decrement Function
function decrement()
{
    count--;
    if(count>=0)
    {
        display.textContent=count
    }
}

//Reset Function
function reset()
{
    count=0;
    display.textContent=count;
}



/*

inc.addEventListener("click",()=>{
    increment()
})
dec.addEventListener("click",()=>{
   decrement()
})
res.addEventListener("click",()=>{
   reset()
})*/