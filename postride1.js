// Select the form and add a submit event listener
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get all input values
    const startLocation = document.getElementById('start-location').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;
    const notes = document.getElementById('notes').value;

    // Basic validation
    if (!startLocation || !destination || !date || !time || !seats) {
        alert("Please fill in all required fields.");
        return;
    }

    // You could add more validation logic (e.g., date in the future, seats >= 1)

    // Create a ride object
    const rideDetails = {
        startLocation,
        destination,
        date,
        time,
        seats,
        notes
    };

    // Here, you can send the rideDetails to a server or store it locally
    // For now, we just log it to the console and display an alert
    console.log("Ride Details:", rideDetails);

    // Display a success message
    alert("Your ride has been posted successfully!");

    // Optionally, redirect the user or clear the form
    form.reset();  // Clears the form
});
