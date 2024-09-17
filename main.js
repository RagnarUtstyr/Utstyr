// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the hamburger icon element and the navbar element
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('ul.navbar');

    // When the hamburger is clicked, toggle the mobile menu
    hamburger.addEventListener('click', function () {
        // Toggle the 'active' class to change the hamburger icon appearance
        hamburger.classList.toggle('active');

        // Toggle the 'mobile-active' class to show or hide the navbar
        navbar.classList.toggle('mobile-active');
    });
});

// Optional: Close the mobile navbar when clicking outside of it (for better UX)
document.addEventListener('click', function (event) {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('ul.navbar');

    // Check if the click is outside the hamburger and navbar
    if (!hamburger.contains(event.target) && !navbar.contains(event.target)) {
        // If the menu is open, close it by removing the active classes
        if (navbar.classList.contains('mobile-active')) {
            navbar.classList.remove('mobile-active');
            hamburger.classList.remove('active');
        }
    }
});
