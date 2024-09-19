const body=document.body;
body.style.cssText="background-color:Black;color:white;"


// const heading=document.getElementById("root")
// heading.style.cssText="color:white;font-size:100px;padding:20px;"

/*
const divChilds=document.getElementsByClassName("item");
 console.log(divChilds[2])
divChilds[2].style.color="red" */


const divs=document.getElementsByTagName("div");
divs["parent"].style.cssText="background-color:white;color:black;"
// console.log(divs[3].textContent)
divs[3].textContent="Abra ka Dabra"

