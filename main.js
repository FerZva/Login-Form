//variables
const button = document.querySelector(".button")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")

//Functions
function askname() {
    const name = prompt("Enter your name please")
    showname(name)
}

function showname(name) {
    h1.textContent = "Hello! 😍"
    h2.textContent = name
}


//Events
button.addEventListener("click", askname)