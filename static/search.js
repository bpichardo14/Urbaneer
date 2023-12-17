// Simulated place and friends data
const fakePlaces = [
    { name: "Coffee Central", location: "123 Brew Lane" },
    { name: "Pizza Paradise", location: "456 Dough St" },
    { name: "Sushi Spot", location: "789 Tuna Ave" },
    // Add more fake place data as needed
];

const fakeFriends = [
    {'name': 'Brian', 'image': 'brian.png', 'info': 'Good morning everyone', 'userID': 'l98v5s'},
    {'name': 'Chris', 'image': 'chris.png', 'info': 'I am Chris', 'userID': '6xvip7'},
    {'name': 'Francis', 'image': 'eun.png', 'info': 'The King of fighter', 'userID': 'jkl9ty'},
    {'name': 'Julia', 'image': 'julia.png', 'info': 'Hi it is Julia', 'userID': 'y5uwa2'},
    {'name': 'Mariah', 'image': 'mariah.png', 'info': 'Christmas is coming..', 'userID': 'f1wfem'},
    {'name': 'Taylor', 'image': 'taylor.png', 'info': 'The Eras Tour', 'userID': '35b4p2'},
    {'name': 'Whitney', 'image': 'whitney.png', 'info': 'Legend', 'userID': '891x1r'},
    {'name': 'Will', 'image': 'will.png', 'info': 'It is Will', 'userID': 'xox3zr'}
];

document.addEventListener('DOMContentLoaded', function() {
    // Event listener for search input
    document.getElementById('placeSearchInput').addEventListener('input', function(e) {
        displaySearchResults(e.target.value);
    });

    // Event listener for invite button (envelope icon)
    document.getElementById('envelopeIcon').addEventListener('click', function() {
        openEventDetailsModal();
    });

    // Event listener for creating a post
    document.getElementById('createPostButton').addEventListener('click', createPost);

    // Event listener for photo upload
    document.getElementById('photoUpload').addEventListener('change', handlePhotoUpload);

    // Event listener for submitting the event details form
    document.getElementById('eventDetailsForm').addEventListener('submit', function(event) {
        event.preventDefault();
        handleEventCreation();
        closeEventDetailsModal();
    });
});

function displaySearchResults(query) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    const results = fakePlaces.filter(place => place.name.toLowerCase().includes(query.toLowerCase()));
    results.forEach(place => {
        const div = document.createElement('div');
        div.textContent = place.name;
        div.onclick = () => selectPlace(place);
        resultsContainer.appendChild(div);
    });
    resultsContainer.style.display = results.length ? 'block' : 'none';
}

function selectPlace(place) {
    document.getElementById('placeSearchInput').value = place.name;
    document.getElementById('placeLocation').value = place.location;
    document.getElementById('searchResults').style.display = 'none';
}

function openEventDetailsModal() {
    document.getElementById('eventDetailsModal').style.display = 'block';
}

function closeEventDetailsModal() {
    document.getElementById('eventDetailsModal').style.display = 'none';
}

function createPost() {
    console.log('Create Post logic goes here.');
}

function handlePhotoUpload(event) {
    console.log('Photo upload logic will be implemented here.');
}

function handleEventCreation() {
    // Logic for handling event creation
    console.log('Event creation logic goes here.');
}

function showSuggestions(input) {
    let suggestions = '';
    if (input.length > 0) {
        const filtered = fakeFriends.filter(friend => friend.name.toLowerCase().startsWith(input.toLowerCase()));
        suggestions = filtered.map(friend => `<div onclick="addTag('${friend.userID}')">${friend.name}</div>`).join('');
    }
    document.getElementById('userSuggestions').innerHTML = suggestions;
    document.getElementById('userSuggestions').style.display = suggestions ? 'block' : 'none';
}

function addTag(userID) {
    const taggedUsersList = document.getElementById('taggedUsersList');
    taggedUsersList.innerHTML += `<span class="tag">${userID}</span>`;
    document.getElementById('userTagInput').value = '';
    document.getElementById('userSuggestions').style.display = 'none';
    updateMinParticipants();
}

function updateMinParticipants() {
    const tags = document.querySelectorAll('#taggedUsersList .tag');
    document.getElementById('maxParticipants').min = tags.length + 1;
}
