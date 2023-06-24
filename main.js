// CopyRight Year
let currentYear = new Date().getFullYear();
let copyRightYear = document.querySelector("#copyRightYear");
copyRightYear.textContent = `${currentYear} - Leon`;

// Navigation
let menuIcon = document.querySelector("header nav");
let menuLinks = document.querySelector("header .container nav ul");
console.log(menuIcon);

menuIcon.addEventListener("click", () => {
  console.log("clicked");
  menuLinks.classList.toggle("active");
});
