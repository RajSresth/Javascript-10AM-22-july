console.log(window.history)
console.log(window.history.length)

const btn1=document.querySelector("#btn1")
// const btn2=document.querySelector("#btn2")
// const btn3=document.querySelector("#btn3")
const btn4=document.querySelector("#btn4")
const btn5=document.querySelector("#btn5")

btn1.addEventListener("click",()=>{
    location.assign("https://www.google.com")
})

// btn2.addEventListener("click",()=>{
//     location.assign("https://www.facebook.com")
// })

// btn3.addEventListener("click",()=>{
//     location.assign("https://www.snapchat.com")
// })

btn4.addEventListener("click",()=>{
    history.back()
})

btn5.addEventListener("click",()=>{
    history.forward()
})

const btn6=document.querySelector("#btn6")

btn6.addEventListener("click",()=>{
    history.go(-2)
})