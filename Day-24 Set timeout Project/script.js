const bar=document.getElementById("bar");

bar.addEventListener("click",()=>{
    const nav=document.querySelector(".desktop-nav")
    nav.classList.toggle("open")

    const span1=document.querySelector("#bar>span:nth-child(1)")
    const span2=document.querySelector("#bar>span:nth-child(2)")
    const span3=document.querySelector("#bar>span:nth-child(3)")

    span1.classList.toggle("left")
    span2.classList.toggle("hide")
    span3.classList.toggle("right")

})


// For Hero Section
const images=document.querySelectorAll(".slide");
const imageLength=images.length
let count=0;
let intervalId;

images.forEach((val,ind)=>{
    val.style.left=`${ind * 100}%`  
})


function prev()
{
   if(count!==0)
   {
    stopAutoSlide()
    count--;
    slideImg()
    startAutoSlide()
   }
}

function next()
{
    if(count<imageLength-1)
    {
        stopAutoSlide()
        count++
        slideImg()
        startAutoSlide()
    }
}

function slideImg()
{
    images.forEach(val=>{
        val.style.transform=`translateX(-${count * 100}%)`
    })
}


function startAutoSlide()
{
    intervalId=setInterval(next,1000)
}
function stopAutoSlide()
{
    clearInterval(intervalId)
}


startAutoSlide()