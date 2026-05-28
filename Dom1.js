// console.log(document.getElementById("cont"))
// console.log(document.getElementsByClassName("box"))
// console.log(document.getElementsByName("rate"))
// console.log(document.getElementsByTagName("div"))


// console.log(document.querySelector("#cont"))
// console.log(document.querySelector(".box"))
// console.log(document.querySelector("[name='rate']"))
// console.log(document.querySelector("div"))
// console.log(document.querySelectorAll(".box"))

let box1 = document.querySelector(".box")
box1.style.backgroundColor = "red"
box1.style.width = "200px"
box1.style.height = "200px"
box1.style.borderRadius = "50%"

let box2 = document.querySelectorAll(".box")[1]
box2.style.backgroundColor = "green"
box2.style.width = "200px"
box2.style.height = "200px"
box2.style.borderRadius = "50%"


let box3 = document.querySelectorAll(".box")[2]
box3.style.backgroundColor = ""
box3.style.width = "200px"
box3.style.height = "200px"
box3.style.borderRadius = "50%"
box3.style.color = "black"


let para = box3
para.textContent = "Hello World"
para.style.fontSize = "30px"
para.style.textAlign = "center"
para.style.lineHeight = "200px"
para.innerHTML = "<strong>Hello sushil</strong>"
para.innerText = " World Hello"




let bulb = document.getAttribute("bulb")
    bulb.style.width = "100px"
    bulb.style.cursor = "pointer"
    bulb.style.marginTop = "20px"
    
    