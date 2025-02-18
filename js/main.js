// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    // Navbar background effect
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }

    // Active section highlighting - refined version
    const scrollPosition = window.scrollY + 150; // Smaller offset for better precision

    // Remove active class from all nav links first
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Find the current section and highlight its nav link
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Get the target section
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll to the section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update URL hash without jumping (optional)
            history.pushState(null, null, this.getAttribute('href'));
        }
    });
});

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Typing animation
document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const nameElement = document.getElementById('name');
    const greeting = "Hi, I'm ";
    const name = "Rajat Mehta";
    let greetingIndex = 0;
    let nameIndex = 0;
    let currentElement = greetingElement;
    let currentText = greeting;
    let currentIndex = 0;

    function type() {
        if (currentIndex < currentText.length) {
            currentElement.innerHTML = currentText.substring(0, currentIndex + 1) + '<span class="cursor"></span>';
            currentIndex++;
            setTimeout(type, 100); // Adjust typing speed here (milliseconds)
        } else if (currentElement === greetingElement) {
            // Switch to typing name after greeting is done
            currentElement = nameElement;
            currentText = name;
            currentIndex = 0;
            greetingElement.innerHTML = greeting; // Remove cursor from greeting
            setTimeout(type, 200); // Delay before starting to type name
        } else {
            // Keep cursor blinking after complete
            nameElement.innerHTML = name + '<span class="cursor"></span>';
        }
    }

    // Start typing animation
    setTimeout(type, 500); // Initial delay before starting
}); 