// Glitch effect for all h1 elements
const glitchTitles = document.querySelectorAll(".js-glitch");

function glitch() {
  const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~";

  glitchTitles.forEach(glitchText => {
    const originalText = glitchText.dataset.original || glitchText.textContent;

    // Save original text if not already saved
    if (!glitchText.dataset.original) {
      glitchText.dataset.original = originalText;
    }

    let glitched = originalText.split("").map(char => {
      return Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char;
    });
    
    glitchText.textContent = glitched.join("");
    
    setTimeout(() => {
      glitchText.textContent = originalText;
    }, 100);
  });
}

setInterval(glitch, 3000);


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.01
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

document.addEventListener('DOMContentLoaded', function() {
  const expandIcons = document.querySelectorAll('.expand-icon');

  expandIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const section = this.closest('.collapsible-section');
      section.classList.toggle('active');
    });
  });
});
