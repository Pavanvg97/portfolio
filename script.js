// Optional: Scroll-reveal or contact form handling can be added here
// Simple fade-in animations on scroll using Intersection Observer

// Select all elements with the class "section"
const sections = document.querySelectorAll('.section');

// Create an IntersectionObserver to detect when sections enter the viewport
const observer = new IntersectionObserver((entries) => {
  
  // Loop through each observed section
  entries.forEach(entry => {
    
    // Check if the section is currently visible in the viewport
    if (entry.isIntersecting) {
      
      // Add the animation class when the section becomes visible
      entry.target.classList.add('animate-fade-in');
    }
  });

// Options for the observer
}, { 
  threshold: 0.2 // Trigger when 20% of the section is visible
});

// Start observing each section
sections.forEach(section => {
  observer.observe(section);
});
