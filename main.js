// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger'); // Hamburger icon
    const navbar = document.getElementById('navbar'); // Navbar (menu)

    // Function to toggle the mobile menu when the hamburger icon is clicked
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('mobile-active'); // Toggle the "mobile-active" class
    });

    // Add event listeners to dropdowns for mobile behavior
    const dropdowns = document.querySelectorAll('.dropdown'); // Select all dropdown elements
    dropdowns.forEach(dropdown => {
        // On click, toggle the dropdown content visibility
        dropdown.addEventListener('click', function(event) {
            // Prevent the default link click behavior to only show dropdown
            event.preventDefault();
            
            // Close all other open dropdowns except for the one clicked
            dropdowns.forEach(dd => {
                if (dd !== dropdown) {
                    dd.querySelector('.dropdown-content').style.display = 'none';
                }
            });

            // Toggle the dropdown content
            const dropdownContent = this.querySelector('.dropdown-content');
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function(event) {
        // Check if the clicked element is not part of the dropdown or the hamburger menu
        if (!event.target.closest('.dropdown') && !event.target.closest('#hamburger')) {
            // Hide all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });

    // Slideshow functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel .slide'); // Get all slides
    const dots = document.querySelectorAll('.dot'); // Get all dots

    function showSlides() {
        // Hide all slides
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });

        // Remove "active" class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Increment slideIndex, reset if it goes beyond the number of slides
        slideIndex++;
        if (slideIndex > slides.length) { 
            slideIndex = 1; 
        }

        // Display the current slide and add "active" class to the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add('active');

        // Automatically change slides every 3 seconds
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }

    // Start the slideshow
    showSlides();
});
