/* document.createElement("tagname")

const heading=document.createElement("h1")
heading.textContent="Jai Shree Ram..🙏"
heading.style.color="white"
*/

/* Insert an Element
// 1. appendChild()
    const body=document.body
    body.style.backgroundColor="black"
    body.appendChild(heading) */

// insertAdjacentElement("position",element)

/* Insert First and Last Sibling
const p1=document.createElement("p")
const p2=document.createElement("p")

p1.textContent="Starting Tag"
p2.textContent="Ending Tag"

const div=document.querySelector("#box")

div.insertAdjacentElement("beforebegin",p1)
div.insertAdjacentElement("afterend",p2) */

/* Insert First and Last Child
const first=document.createElement("p")
const last=document.createElement("p")

first.textContent="Paragraph Child-1"
last.textContent="Paragraph Child-3"

const div=document.querySelector("#box")

div.insertAdjacentElement("afterbegin",first)
div.insertAdjacentElement("beforeend",last)
*/

/* task
const first=document.createElement("p");
const third=document.createElement("p");

first.textContent="First Child"
third.textContent="Third Child"

const second=document.querySelector(".p2")

second.insertAdjacentElement("beforebegin",first)
second.insertAdjacentElement("afterend",third)
*/