const images = ["Screenshot from 2024-04-02 13-17-49.png", "./one.svg","./four.svg", "./three.svg"];
let currentIndex = 0;
const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");


function showImage() {
  imageElement.src = images[currentIndex];
}


nextButton.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
});

prevButton.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
});


showImage();