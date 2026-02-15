const countries = ["Ukraine", "USA", "Germany", "France", "Italy", "Spain", "Poland", "UK", "Canada", "Australia"];
const locationInput = document.getElementById("location");
const locationList = document.querySelector(".location-list");

// відкриваємо список при фокусі
locationInput.addEventListener("focus", () => {
  locationList.innerHTML = ""; // очищаємо список
  countries.forEach(country => {
    const li = document.createElement("li");
    li.textContent = country;
    li.addEventListener("click", () => {
      locationInput.value = country; // вставляємо у інпут
      locationList.style.display = "none"; // ховаємо список
    });
    locationList.appendChild(li);
  });
  locationList.style.display = "block";
});

// ховаємо список, якщо клік поза інпутом
document.addEventListener("click", (e) => {
  if (!locationInput.contains(e.target) && !locationList.contains(e.target)) {
    locationList.style.display = "none";
  }
});
