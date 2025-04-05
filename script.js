// For bringing all the toggle buttons
const toggles = document.querySelectorAll(".faq-toggle");

// Loop through nodelist
toggles.forEach((toggle) => {
  //  Added Event Listener
  toggle.addEventListener("click", () => {
    // Toggle the active class
    toggle.parentNode.classList.toggle("active");
  });
});
