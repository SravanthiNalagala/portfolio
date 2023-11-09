const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Function to close the mobile menu when a nav__link is clicked
const navLinks = document.querySelectorAll(".nav__link");

function closeMobileMenu() {
  navMenu.classList.remove("show-menu");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Toggle skills content
const skillsContent = document.querySelectorAll(".skills__content");
const skillsHeaders = document.querySelectorAll(".skills__header");

function toggleSkills() {
  skillsContent.forEach((content) => {
    content.classList.remove("skills__open");
  });

  const itemClass = this.parentNode.className;
  if (itemClass === "skills_content skills_close") {
    this.parentNode.classList.add("skills__open");
  }
}

skillsHeaders.forEach((header) => {
  header.addEventListener("click", toggleSkills);
});

// Add event listeners for services modal
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

function openModal(modalClick) {
  modalViews[modalClick].classList.add("active-modal");
}


function closeModal() {
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
}


modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    openModal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", closeModal);
});

// Initialize the Swiper for portfolio
const swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Handle scroll events to update active links and scroll header
const sections = document.querySelectorAll("section[id]");


function updateActiveLinks() {
  const scrollY = window.pageYOffset;

sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    const link = document.querySelector(.nav__menu a[href*="${sectionId}"]); // Add double quotes around sectionId
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  


function updateHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", () => {
  updateActiveLinks();
  updateHeader();
});

// Handle scroll event to show/hide scroll-up button
function showScrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", showScrollUp)});
}