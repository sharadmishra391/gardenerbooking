// script.js
const nextButtons = document.querySelectorAll(".next-button");
const backButtons = document.querySelectorAll(".back-button");
const formSteps = document.querySelectorAll(".form-step");
const progressBarFill = document.getElementById("progressBarFill");
let currentStep = 0;

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("form-step-active");
    currentStep++;
    formSteps[currentStep].classList.add("form-step-active");
    updateProgressBar();
  });
});

backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    formSteps[currentStep].classList.remove("form-step-active");
    currentStep--;
    formSteps[currentStep].classList.add("form-step-active");
    updateProgressBar();
  });
});

function updateProgressBar() {
  const progress = ((currentStep + 1) / formSteps.length) * 100;
  progressBarFill.style.width = `${progress}%`;
}

// Initialize progress bar on page load
updateProgressBar();

