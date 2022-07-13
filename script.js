let arrows = document.querySelectorAll(".fa-solid")
let buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
   // button.children[0].classList.remove("animate__shakeX")
    button.addEventListener("mouseenter", function() {
        button.children[0].classList.toggle("animate__shakeX")
    })
})

arrows.forEach((button) => {
   // button.classList.remove("animate__shakeX")
    button.addEventListener("mouseenter", function() {
        button.classList.toggle("animate__shakeX")
    })
} )