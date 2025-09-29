document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            navbar.style.padding = '15px 0';
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.navbar nav');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggles the 'active' class on the navbar
    });

    // Close mobile menu when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        });
    });

    // Fade-in Sections on Scroll (Intersection Observer)
    const fadeInSections = document.querySelectorAll('.section-padding');

    const observerOptions = {
        root: null,
        threshold: 0.2, // When 20% of the section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'appear');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        section.classList.add('fade-in'); // Add initial fade-in class
        observer.observe(section);
    });

    // Parallax Effect for Hero (Example - more advanced might use a library)
    const heroSection = document.getElementById('hero');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Adjust speed as needed
    });


    // Testimonial Slider (Basic Implementation)
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((card, i) => {
            card.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Auto-advance testimonials every 5 seconds
    setInterval(nextTestimonial, 5000);
    showTestimonial(currentTestimonial); // Show the first testimonial initially

    // Optional: Add navigation arrows for the slider if desired
});