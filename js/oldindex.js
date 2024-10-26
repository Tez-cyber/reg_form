

const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const form4 = document.getElementById('form4')
const signupRedirect = document.querySelector('#submitBtn')

const progressBar = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

// =====================
signupRedirect.addEventListener("click", (e) => {
    e.preventDefault()
    const multiForm = "/multi.html"
    window.open(multiForm)
})
signupRedirect.removeEventListener("click")

let currentActive = 1;
// =================== Next Form
function nextItem () {
    form1.style.left = '450px'
    console.log("First next clicked")
    form2.style.left = '200%'
    form3.style.left = '100%'
    form4.style.left = '100%'
}

// ================= btn events
const btnsEvent = () => {
    const next1 = document.getElementById("next1")
    const next2 = document.getElementById("next2")
    const next3 = document.getElementById("next3")
    const next4 = document.getElementById("next4")

    //===========
    next1.addEventListener('click', nextItem())
}

// document.addEventListener('DOMContentLoaded', btnsEvent)
