// Glitch effect for all h1 elements
const glitchTitles = document.querySelectorAll("h1");

function glitch() {
  const chars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~";

  glitchTitles.forEach(glitchText => {
    const originalText = glitchText.textContent;

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
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});


