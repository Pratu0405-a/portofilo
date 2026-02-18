// Smooth scrolling for contact section
const contactLink = document.querySelector('a[href="#contact"]');
contactLink.addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.getElementById('contact');
    window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
    });
});

// Script to detect when the section is in view
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    function checkSectionVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Initially check visibility
    checkSectionVisibility();

    // Check on scroll
    window.addEventListener('scroll', checkSectionVisibility);
});

// Add scroll event to change the header's background color
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        // Add a 'scrolled' class when scrolling past 50px
        header.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class when at the top of the page
        header.classList.remove('scrolled');
    }
});
