const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

signUpButton.addEventListener('click', function() {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
});

signInButton.addEventListener('click', function() {
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
});

const passwordInput = document.getElementById('password');
const popup = document.getElementById('passwordHelp');
const lengthCriteria = document.getElementById('length');
const uppercaseCriteria = document.getElementById('uppercase');
const lowercaseCriteria = document.getElementById('lowercase');
const numberCriteria = document.getElementById('number');
const specialCriteria = document.getElementById('special');

passwordInput.addEventListener('focus', () => {
    popup.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
    popup.style.display = 'none';
});

passwordInput.addEventListener('input', () => {
    const value = passwordInput.value;

    // Validate length
    if (value.length >= 8) {
        lengthCriteria.classList.remove('invalid');
        lengthCriteria.classList.add('valid');
    } else {
        lengthCriteria.classList.remove('valid');
        lengthCriteria.classList.add('invalid');
    }

    // Validate uppercase
    if (/[A-Z]/.test(value)) {
        uppercaseCriteria.classList.remove('invalid');
        uppercaseCriteria.classList.add('valid');
    } else {
        uppercaseCriteria.classList.remove('valid');
        uppercaseCriteria.classList.add('invalid');
    }

    // Validate lowercase
    if (/[a-z]/.test(value)) {
        lowercaseCriteria.classList.remove('invalid');
        lowercaseCriteria.classList.add('valid');
    } else {
        lowercaseCriteria.classList.remove('valid');
        lowercaseCriteria.classList.add('invalid');
    }

    // Validate number
    if (/\d/.test(value)) {
        numberCriteria.classList.remove('invalid');
        numberCriteria.classList.add('valid');
    } else {
        numberCriteria.classList.remove('valid');
        numberCriteria.classList.add('invalid');
    }

    // Validate special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        specialCriteria.classList.remove('invalid');
        specialCriteria.classList.add('valid');
    } else {
        specialCriteria.classList.remove('valid');
        specialCriteria.classList.add('invalid');
    }
});
