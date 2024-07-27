function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailFeedback = document.getElementById('emailFeedback');
    const emailValue = emailInput.value;

    //email validation
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailFeedback.textContent = 'All good to go!';
        emailFeedback.className = 'success';
    } else {
        emailFeedback.textContent = 'Invalid email. Make sure it contains "@" and "." and is longer than 3 characters.';
        emailFeedback.classNmae = 'error';
    }
}



function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordFeedback = document.getElementById('passwordFeedback');
    const passwordValue = passwordInput.value;

    //password validation
    if (passwordValue.length > 8) {
        passwordFeedback.textContent = 'All good to go!';
        passwordFeedback.className = 'success';
    } else {
        passwordFeedback.textContent = 'Password must be more than 8 characters.';
        passwordFeedback.className = 'error'
    }
}



function handleSubmit() {
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');


    //both validation check

    if (emailFeedback.className === 'success' && passwordFeedback.className === 'success') {
        const confirmed = confirm('Are you sure you want to submit?');

        if (confirmed) {
            alert('Sucessful signup!');
            document.getElementById('signupForm').reset();
            emailFeedback.textContent = '';
            passwordFeedback.textContent = '';
        }
        // else {
        //     document.getElementById('signupForm').reset();
        //     emailFeedback.textContent = '';
        //     passwordFeedback.textContent = '';
        // }
    } else {
        alert('Please correct the errors before submitting.');
    }
}



