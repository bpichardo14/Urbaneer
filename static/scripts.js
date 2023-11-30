window.onload = function() {
    const placesList = document.getElementById('places-list');
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
  };
  