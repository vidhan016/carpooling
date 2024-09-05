// Select the form and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to simulate validation

    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform validation
    if (validateEmail(email) && validatePassword(password)) {
        alert('Login successful!');
        // You can add functionality here to redirect or send data to the server
        form.reset(); // Clear the form fields after successful login
    }
});

// Function to validate email (basic pattern check)
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to validate password (non-empty)
function validatePassword(password) {
    if (password.trim() === '') {
        alert('Password is required.');
        return false;
    }
    return true;
}
