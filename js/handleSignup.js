// =================== Signup page submission
const regForm = document.getElementById("regForm")
const errMessage = document.getElementById("regError");
const AgreeTerms = document.getElementById("agree")
const submitBtn = document.getElementById("submit")

regForm?.addEventListener("submit", (e) => {
    e.preventDefault()

    const { fullname, username, email, password } = regForm.elements
    errMessage.innerHTML = "";

    // =============== Check input fields
    if (!fullname.value.trim()) {
        showErr("Full name is required.")
        return;
    }

    if (!username.value.trim()) {
        showErr("Username is required.")
        return;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
        showErr("Please enter a valid email address.");
        return;
    }


    if (!password.value.trim() || !isStrongPassword(password.value)) {
        showErr(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
        );
        return;
    }
    

    if (!AgreeTerms.checked) {
        showErr(
            "Pls agree to terms"
        )
        return;
    }
    regForm.reset()
    const successReg = './multi.html'
    window.open(successReg)

})

// =============== Validation
const showErr = (message) => {
    errMessage.innerHTML += `<p class="error">${message}</p>`
}

function disappear() {
    setTimeout(hideElement, 1000)
    function hideElement() {
        errMessage.style.display = "none"
    }
}

// ==== Check Password
const isStrongPassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}
// ==== Check Email
const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
