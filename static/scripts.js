window.onload = function() {
  // Common function to load places
  function loadPlaces(placesListId) {
      const placesList = document.getElementById(placesListId);
      if (!placesList) return; // Exit if the element doesn't exist

      fetch('/api/places')
        .then(response => response.json())
        .then(data => {
          data.forEach(place => {
            const listItem = document.createElement('li');
            listItem.className = 'place-card';
            
            const image = document.createElement('img');
            image.className = 'place-image';
            image.src = "/static/image/" + place.image;
            image.alt = place.name;
            image.onclick = function() {
              window.location.href = '/place/' + place.name;
            };
    
            const infoDiv = document.createElement('div');
            infoDiv.className = 'place-info';
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
        .catch(error => console.error('Error fetching data:', error));
  }

  // Load places on index page
  loadPlaces('places-list');
  loadPlaces('profile-places-list');

  // Existing function to update time
  function updateTime() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('current-time').textContent = hours + ':' + minutes;
  }

  setInterval(updateTime, 60000);
  updateTime();
};

// Place this code inside the `DOMContentLoaded` event listener
document.addEventListener('DOMContentLoaded', (event) => {
  // Existing code...

  // Get the modal
  var modal = document.getElementById("addPlaceModal");

  // Get the button that opens the modal
  var btn = document.getElementById("addPlaceButton");

  // Get the <span> element that closes the modal
  var closeBtn = document.getElementsByClassName("close-button")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Handle the form submission
  var form = document.getElementById("addPlaceForm");
  form.onsubmit = function(event) {
    event.preventDefault();
    // AJAX call to server with form data
    // For example, using fetch API:
    var placeName = document.getElementById("placeName").value;
    var placeDescription = document.getElementById("placeDescription").value;
    
    fetch('/add_place', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `placeName=${placeName}&placeDescription=${placeDescription}`
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Close the modal
      modal.style.display = "none";
      // Optionally, add the new place to the places list without reloading the page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
});
