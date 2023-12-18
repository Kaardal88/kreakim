var currentImageIndex = 0;
var modalImages = [];

function openModal(initialImage, altImages ) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImages = [initialImage, ...altImages];
  currentImageIndex = 0;
  modalImage.src = modalImages[currentImageIndex];
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;

  // Wrap around if reaching the end
  if (currentImageIndex >= modalImages.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = modalImages.length - 1;
  }

  var modalImage = document.getElementById("modalImage");
  modalImage.src = modalImages[currentImageIndex];
}