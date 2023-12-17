function openTextScreen(contactName) {
  window.location.href = `/text_screen?contact=${contactName}`;
}

function toggleSortOptions() {
  document.getElementById("sortOptions").classList.toggle("show");
}

function toggleFilterOptions() {
  document.getElementById("filterOptions").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".sort-icon, .filter-icon")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function redirectToEventDetails(eventName) {
  window.location.href = `/event_details/${eventName}`;
}
