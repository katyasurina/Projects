const passwordInput = document.querySelector(".sign__password input");
const showEL = document.querySelector(".sign__password .fa-eye");
const hideEL = document.querySelector(".sign__password .fa-eye-slash");

showEL.addEventListener("click", () => {
  passwordInput.type = "text";
  hideEL.classList.remove("hide");
  showEL.classList.add("hide");
});

hideEL.addEventListener("click", () => {
  passwordInput.type = "password";
  hideEL.classList.add("hide");
  showEL.classList.remove("hide");
});




const canvas = document.getElementById('dots');
const ctx = canvas.getContext('2d');
let dots = [];
const dotCount = 80;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < dotCount; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
  for (let dot of dots) {
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fill();
    dot.x += dot.dx;
    dot.y += dot.dy;
    if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
    if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
  }
  requestAnimationFrame(animate);
}
animate();




const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "ua",
  preferredCountries: ["ua", "us", "gb", "pl"],
  separateDialCode: true,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});
