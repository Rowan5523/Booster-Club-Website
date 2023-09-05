const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentImageIndex = 0;

  function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${currentImageIndex * 100}%)`;
  }

  function showNextSlide() {
    currentImageIndex++;
    if (currentImageIndex === images.length) {
      currentImageIndex = 0; // Loop back to the first image
    }
    updateSlidePosition();
  }

  function showPrevSlide() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1; // Go to the last image when at the beginning
    }
    updateSlidePosition();
  }

  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  updateSlidePosition();