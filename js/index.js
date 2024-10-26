const form1 = document.getElementById('form1')
const form2 = document.getElementById('form2')
const form3 = document.getElementById('form3')
const form4 = document.getElementById('form4')
const eyeIcon = document.getElementById('eyeIcon')

const progressBar = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

let currentActive = 1;

// =================== Signup page submission
const regForm = document.getElementById("regForm")

regForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const successReg = './multi.html'
    window.open(successReg)


})

// ======================= reveal password
function showPassword() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const inputType = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = inputType;

    // Change the icon based on visibility
    eyeIcon.textContent = inputType === 'password' ? '👁️' : '🙈'; // Open eye icon
}





// ==================== Progress Bar update
const update = () => {
    currentActive++
    console.log(currentActive)
    console.log(circles.length)
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }

        const active = document.querySelectorAll('.active')
        progressBar.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + '%'
    })
}
// =================== Go to next form
function nextItemOne() {
    form1.style.display = 'none'
    console.log("First next clicked")
    form2.style.left = '64px'

    update()
}
function nextItemTwo() {
    form2.style.display = 'none'
    form3.style.left = '64px'

    update()
}
function nextItemThree() {
    console.log("First next clicked")
    form3.style.display = 'none'
    form4.style.left = '64px'

    update()
}
// ================= btn events
const btnsEvent = () => {
    const next1 = document.getElementById("next1")
    const next2 = document.getElementById("next2")
    const next3 = document.getElementById("next3")

    //===========
    next1?.addEventListener('click', nextItemOne)
    next2?.addEventListener('click', nextItemTwo)
    next3?.addEventListener('click', nextItemThree)
}

document.addEventListener('DOMContentLoaded', btnsEvent)