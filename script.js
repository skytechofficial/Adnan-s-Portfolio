// Select elements using const since they don't change
const d = new Date();
let year = d.getFullYear();
const mobileNav = document.querySelector(".res-nav");
const closeButton = document.querySelector(".cross");
const menuButton = document.querySelector(".menu");
const footerText = document.querySelector(".footer-text");
footerText.textContent = `© ${year} Muhammad Adnan | Mern Stack Developer 🚀`;

// Ensure elements exist before adding event listeners
if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.remove("hidden");
  });
}

if (closeButton && mobileNav) {
  closeButton.addEventListener("click", () => {
    mobileNav.classList.add("hidden");
  });
}

// Handle resume download (single function for multiple buttons)
const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "resume.pdf"; // Path to resume
  link.download = "Muhammad_Adnan_Resume.pdf"; // Cleaner file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Apply download function to multiple buttons
document
  .querySelectorAll(".download-btn, .download-link, .download-resume")
  .forEach((btn) => {
    btn.addEventListener("click", downloadResume);
  });
