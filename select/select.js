// Get the modal
var modal = document.getElementById("focusModal");

// Get the button that opens the modal
var btn = document.querySelector(".navigation-bar img[alt='Add']"); // Updated selector

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Elements to blur
var elementsToBlur = document.querySelectorAll(".phone-outline");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  elementsToBlur.forEach(function (el) {
    el.style.filter = "blur(2px)"; // Blur specific elements
  });
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  elementsToBlur.forEach(function (el) {
    el.style.filter = "none"; // Remove blur
  });
};

// Click anywhere outside of the modal to close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    elementsToBlur.forEach(function (el) {
      el.style.filter = "none";
    });
  }
};
