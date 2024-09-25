const myForm=document.getElementById("myForm")

myForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    const fullName=document.getElementById("user-name")
    const email=document.getElementById("email")
    const password=document.getElementById("pass")
    console.log(fullName.value)
    console.log(email.value)
    console.log(password.value)
})