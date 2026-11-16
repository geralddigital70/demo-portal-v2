// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (mobile)
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth-scroll fallback for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    if (targetId.length > 1) {
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Hero Image Slider (Auto-fade)
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
  setInterval(() => {
    // Remove active class from current slide
    slides[currentSlide].classList.remove("active");
    
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to the new slide
    slides[currentSlide].classList.add("active");
  }, 5000); // 5000 milliseconds = 5 seconds
}