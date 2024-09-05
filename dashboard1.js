// Simulating user data that would be retrieved from a backend system
const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    memberSince: "January 2023",
    profilePicture: "profile-pic.jpg",
    rideHistory: [
        {
            destination: "City Center",
            date: "August 25, 2023",
            driverName: "Jane Smith",
            rating: 4
        },
        {
            destination: "Airport",
            date: "July 15, 2023",
            driverName: "Bob Johnson",
            rating: 4
        },
        {
            destination: "Train Station",
            date: "June 30, 2023",
            driverName: "Alice Williams",
            rating: 3
        }
    ],
    currentRides: [
        {
            destination: "Office",
            date: "September 5, 2023",
            driverName: "Michael Scott",
            status: "Confirmed"
        },
        {
            destination: "Supermarket",
            date: "September 6, 2023",
            driverName: "Pam Beesly",
            status: "Pending"
        }
    ],
    messages: [
        {
            sender: "Michael Scott",
            messagePreview: "See you at 9 AM tomorrow!",
            date: "September 4, 2023, 7:30 PM"
        },
        {
            sender: "Pam Beesly",
            messagePreview: "Can we move the time?",
            date: "September 4, 2023, 5:15 PM"
        }
    ]
};

// Function to display user data on the dashboard
function populateUserData() {
    // Populate the user information section
    document.querySelector('.user-info h3').innerText = userData.name;
    document.querySelector('.user-info p:nth-child(2)').innerText = `Email: ${userData.email}`;
    document.querySelector('.user-info p:nth-child(3)').innerText = `Phone: ${userData.phone}`;
    document.querySelector('.user-info p:nth-child(4)').innerText = `Member since: ${userData.memberSince}`;
    document.querySelector('.user-info img').src = userData.profilePicture;

    // Populate ride history
    const rideHistoryContainer = document.querySelector('.ride-history ul');
    rideHistoryContainer.innerHTML = '';  // Clear any existing entries
    userData.rideHistory.forEach(ride => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Ride to ${ride.destination}:</strong> ${ride.date} <br>
            Driver: ${ride.driverName} | Rating: ${renderRating(ride.rating)}
        `;
        rideHistoryContainer.appendChild(li);
    });

    // Populate current rides
    const currentRidesContainer = document.querySelector('.current-rides ul');
    currentRidesContainer.innerHTML = '';  // Clear any existing entries
    userData.currentRides.forEach(ride => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>Ride to ${ride.destination}:</strong> ${ride.date} <br>
            Driver: ${ride.driverName} | Status: ${ride.status}
        `;
        currentRidesContainer.appendChild(li);
    });

}

// Function to render star ratings
function renderRating(rating) {
    const fullStars = '★'.repeat(rating);
    const emptyStars = '☆'.repeat(5 - rating);
    return fullStars + emptyStars;
}

// Event listener for the "Edit Profile" button
document.querySelector('.dashboard-header button').addEventListener('click', function() {
    alert('Edit Profile button clicked! This can be linked to a profile editing page.');
});

// Initialize dashboard with user data when the page loads
window.onload = populateUserData;
