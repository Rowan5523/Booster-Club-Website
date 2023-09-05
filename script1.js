
  const carouselSlide = document.querySelector(".carousel-slide");
  const images = document.querySelectorAll(".carousel-slide img");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let c = 0;

  // Calculate the total width of all images combined
  const slideWidth = images[0].clientWidth * images.length;
  
  // Set the width of the carouselSlide element
  carouselSlide.style.width = `${slideWidth}px`;

  function updateSlidePosition() {
    carouselSlide.style.transform = `translateX(-${images[0].clientWidth * c}px)`;
  }

  function showNextSlide() {
    c = (c + 1) % images.length;
    updateSlidePosition();
  }

  function showPrevSlide() {
    c = (c - 1 + images.length) % images.length;
    updateSlidePosition();
  }

  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  updateSlidePosition();

