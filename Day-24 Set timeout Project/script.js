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