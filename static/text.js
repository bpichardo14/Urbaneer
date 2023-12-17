function openTextScreen(contactName) {
  window.location.href =
    "/text_screen?contact=" + encodeURIComponent(contactName);
}

document.addEventListener("DOMContentLoaded", function () {
  var contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var contactName = this.querySelector(".contact-details h3").textContent;
      openTextScreen(contactName);
    });
  });
});
