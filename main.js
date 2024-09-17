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
});
