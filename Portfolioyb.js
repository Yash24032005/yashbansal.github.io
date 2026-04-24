// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
function openModal(title, desc, tags, link) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalLink').href = link;
    
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = ''; 
    tags.forEach(tag => {
        const span = document.createElement('span');
        span.innerText = tag;
        // Adding class instead of style
        span.classList.add('tag-badge'); 
        tagsContainer.appendChild(span);
    });

    document.getElementById('projectModal').style.display = 'flex';
}

// Function to Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
};

// Close modal when 'Esc' key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsapp-btn");

  // Pehle check karo ki button exist karta hai ya nahi
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const phoneNumber = "919368717464";
      const message = encodeURIComponent("Hi 👋 Yash! I visited your portfolio and would love to connect.");
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    });
  }
});