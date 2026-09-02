const countries = ["Ukraine", "USA", "Germany", "France", "Italy", "Spain", "Poland", "UK", "Canada", "Australia"];
const locationInput = document.getElementById("location");
const locationList = document.querySelector(".location-list");

locationInput.addEventListener("focus", () => {
  locationList.innerHTML = "";
  countries.forEach(country => {
    const li = document.createElement("li");
    li.textContent = country;
    li.addEventListener("click", () => {
      locationInput.value = country;
      locationList.style.display = "none";
    });
    locationList.appendChild(li);
  });
  locationList.style.display = "block";
});


document.addEventListener("click", (e) => {
  if (!locationInput.contains(e.target) && !locationList.contains(e.target)) {
    locationList.style.display = "none";
  }
});
