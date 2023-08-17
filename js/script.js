// Toggle Class Active
const navbarNav = document.querySelector(".navbar");

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Calculator Triangle

const calculateAreaButton = document.getElementById("calculateArea");
const calculatePerimeterButton = document.getElementById("calculatePerimeter");
const resetAreaButton = document.getElementById("resetArea");
const resetPerimeterButton = document.getElementById("resetPerimeter");
const baseInput = document.getElementById("base");
const heightInput = document.getElementById("height");
const side1Input = document.getElementById("side1");
const side2Input = document.getElementById("side2");
const side3Input = document.getElementById("side3");
const resultAreaOutput = document.getElementById("resultArea");
const resultPerimeterOutput = document.getElementById("resultPerimeter");

calculateAreaButton.addEventListener("click", calculateTriangleArea);
calculatePerimeterButton.addEventListener("click", calculateTrianglePerimeter);
resetAreaButton.addEventListener("click", resetArea);
resetPerimeterButton.addEventListener("click", resetPerimeter);

function calculateTriangleArea() {
  const base = parseFloat(baseInput.value);
  const height = parseFloat(heightInput.value);

  if (isNaN(base) || isNaN(height)) {
    resultAreaOutput.textContent = "Please enter valid numbers.";
    return;
  }

  const area = 0.5 * base * height;

  resultAreaOutput.textContent = `Luas: ${area.toFixed(2)}`;
}

function calculateTrianglePerimeter() {
  const side1 = parseFloat(side1Input.value);
  const side2 = parseFloat(side2Input.value);
  const side3 = parseFloat(side3Input.value);

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    resultPerimeterOutput.textContent =
      "Please enter valid numbers for all sides.";
    return;
  }

  const perimeter = side1 + side2 + side3;

  resultPerimeterOutput.textContent = `Keliling: ${perimeter.toFixed(2)}`;
}

function resetArea() {
  baseInput.value = "";
  heightInput.value = "";
  resultAreaOutput.textContent = "";
}

function resetPerimeter() {
  side1Input.value = "";
  side2Input.value = "";
  side3Input.value = "";
  resultPerimeterOutput.textContent = "";
}
