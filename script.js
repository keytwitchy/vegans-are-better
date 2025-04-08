// Glitch effect for the main header
const glitchText = document.querySelector("header h1");
const originalText = glitchText.textContent;

function glitch() {
  const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~";
  const glitchLength = 6;
  let glitched = originalText.split("").map(char => {
    return Math.random() > 0.9 ? chars[Math.floor(Math.random() * chars.length)] : char;
  });
  glitchText.textContent = glitched.join("");
  setTimeout(() => {
    glitchText.textContent = originalText;
  }, 100);
}

// Repeat glitch occasionally
setInterval(glitch, 3000);

// Fade-in on scroll for all sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


  

