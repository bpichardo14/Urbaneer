window.onload = function () {
  function loadPlaces(placesListId) {
    const placesList = document.getElementById(placesListId);
    if (!placesList) return;

    fetch("/api/places")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((place) => {
          const listItem = document.createElement("li");
          listItem.className = "place-card";

          const image = document.createElement("img");
          image.className = "place-image";
          image.src = "/static/image/" + place.image;
          image.alt = place.name;
          image.onclick = function () {
            window.location.href = "/place/" + place.name;
          };

          const infoDiv = document.createElement("div");
          infoDiv.className = "place-info";
          infoDiv.innerHTML = `
              <h3>${place.name}</h3>
              <p>${place.distance}</p>
              <p>Liked by ${place.likes} others</p>
            `;

          listItem.appendChild(image);
          listItem.appendChild(infoDiv);
          placesList.appendChild(listItem);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  loadPlaces("places-list");
  loadPlaces("profile-places-list");

  function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    document.getElementById("current-time").textContent = hours + ":" + minutes;
  }

  setInterval(updateTime, 60000);
  updateTime();
};

document.addEventListener("DOMContentLoaded", (event) => {
  var modal = document.getElementById("addPlaceModal");

  var btn = document.getElementById("addPlaceButton");

  var closeBtn = document.getElementsByClassName("close-button")[0];

  btn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  var form = document.getElementById("addPlaceForm");
  form.onsubmit = function (event) {
    event.preventDefault();

    var placeName = document.getElementById("placeName").value;
    var placeDescription = document.getElementById("placeDescription").value;

    fetch("/add_place", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `placeName=${placeName}&placeDescription=${placeDescription}`,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        modal.style.display = "none";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
});

function openTextScreen(contactName) {
  window.location.href = `/text_screen?contact=${contactName}`;
}
