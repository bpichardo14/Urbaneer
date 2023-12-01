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
