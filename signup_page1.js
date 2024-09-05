// Select the form and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting to simulate client-side validation

    // Get form input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const userType = document.getElementById('userType').value;

    // Perform validation checks
    if (validateFullName(fullName) && validateEmail(email) && validatePassword(password, confirmPassword)) {
        alert('Sign up successful!');
        // Here you would typically send the data to the backend server
        form.reset(); // Clear the form after successful sign up
    }
});

// Function to validate full name (non-empty)
function validateFullName(fullName) {
    if (fullName.trim() === '') {
        alert('Full Name is required.');
        return false;
    }
    return true;
}

// Function to validate email (basic pattern check)
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to validate password and confirm password (length and match)
function validatePassword(password, confirmPassword) {
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }
    return true;
}
