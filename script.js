// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) lucide.createIcons();
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    if (window.lucide) lucide.createIcons();
  });
});

// FAQ accordion: open one answer at a time
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(faq => {
      faq.classList.remove("open");
      faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      faq.querySelector(".faq-question").innerHTML =
        faq.querySelector(".faq-question").innerHTML.replace(/<svg[\s\S]*?<\/svg>/, '<i data-lucide="plus"></i>');
    });

    if (!wasOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.innerHTML = button.innerHTML.replace(/<svg[\s\S]*?<\/svg>/, '<i data-lucide="minus"></i>');
    }
    if (window.lucide) lucide.createIcons();
  });
});

// Demo form validation and feedback; no backend submission
document.getElementById("consultForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  document.getElementById("formMessage").textContent =
    "Thank you! Your form looks complete. This demo does not send data to a server.";
  form.reset();
});

if (window.lucide) lucide.createIcons();
