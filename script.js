
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});



const portfolioCards = document.querySelectorAll(".fade-in");

function fadeInPortfolio() {
  portfolioCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (cardTop < screenHeight - 50) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", fadeInPortfolio);
fadeInPortfolio();



// TESTIMONIAL
const wrapper = document.querySelector(".testimonials-wrapper");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;
const cards = document.querySelectorAll(".testimonial-card");
const totalCards = cards.length;

function slideTo(index) {
  const cardWidth = wrapper.clientWidth; // full visible width
  wrapper.scrollTo({
    left: cardWidth * index,
    behavior: "smooth"
  });
  currentIndex = index;
}

// Buttons
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) slideTo(currentIndex + 1);
  else slideTo(0);
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) slideTo(currentIndex - 1);
  else slideTo(totalCards - 1);
});

// Auto slide every 4 seconds
setInterval(() => {
  if (currentIndex < totalCards - 1) slideTo(currentIndex + 1);
  else slideTo(0);
}, 4000);

// Adjust on window resize
window.addEventListener("resize", () => {
  slideTo(currentIndex);
}); 

// CONTACT
const contactSection = document.getElementById('contact');
const neonLines = document.querySelector('.neon-lines');
const contactForm = document.querySelector('.contact-form');
const formSuccess = document.getElementById('formSuccess');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // Activate neon lines collision
      neonLines.classList.add('active');

      // Delay form fade-in after lines collide
      setTimeout(() => {
        contactForm.classList.add('active');
      }, 600); // matches collision duration

      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

observer.observe(contactSection);

// Handle form submission with Web3Forms API
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => response.json())
  .then(data => {
    if(data.success){
      formSuccess.classList.add('show');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove('show'), 4000);
    } else {
      alert("There was an error. Please try again.");
    }
  })
  .catch(() => alert("There was an error. Please try again."));
}); 
  //  BLOG
  const blogCards = document.querySelectorAll(".blog-card");

function revealCardsSequentially() {
  let delay = 0;

  blogCards.forEach(card => {
    setTimeout(() => {
      card.classList.add("show");
    }, delay);

    delay += 300; // fade in one after the other
  });
}

const blogObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      revealCardsSequentially();
      blogObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

blogObserver.observe(document.querySelector(".blog-container")); 



// TECH I USE
const techCards = document.querySelectorAll(".tech-card");
const progressBars = document.querySelectorAll(".progress");

function showTechCards() {
  let delay = 0;

  techCards.forEach(card => {
    setTimeout(() => {
      card.classList.add("show");
    }, delay);
    delay += 200;
  });
}

function fillBars() {
  progressBars.forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
}

const techObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      showTechCards();
      fillBars();
      techObserver.disconnect();
    }
  });
}, { threshold: 0.3 });

techObserver.observe(document.querySelector(".tech-section")); 

// Accordion
document.querySelectorAll(".faq-clean-item").forEach(item => {
  item.addEventListener("click", () => {
      item.classList.toggle("active");
  });
});

// Fade-In On Scroll
const fadeElements = document.querySelectorAll(".fade-in");

function fadeInOnScroll() {
  fadeElements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight - 100;

      if (position < windowHeight) {
          el.classList.add("show");
      }
  });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll); 


