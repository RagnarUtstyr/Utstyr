document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // Toggle the mobile menu
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('mobile-active');
    });
});