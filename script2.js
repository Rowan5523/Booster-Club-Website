const image1 = document.getElementById('image95');
const image2 = document.getElementById('image96');
const image3 = document.getElementById('image97');
const image4 = document.getElementById('image98');
const image5 = document.getElementById('image99');

const imageSources = ["bmw.png", "hisradio.png", "Jay Kilmartin logo.png", "The melting pot screenshot.png", "Greater Chapin Community Foundation logo.png"];
let currentIndex = 0;

function changeImage() {
    image1.classList.remove('active');
    image2.classList.remove('active');
    image3.classList.remove('active');

    currentIndex = (currentIndex + 1) % imageSources.length;

    if (currentIndex === 0) {
        image1.classList.add('active');
        image1.src = imageSources[currentIndex];
    } else if (currentIndex === 1) {
        image2.classList.add('active');
        image2.src = imageSources[currentIndex];
    } else if (currentIndex === 2) {
        image3.classList.add('active');
        image3.src = imageSources[currentIndex];
    } else if (currentIndex === 3) {
        image3.classList.add('active');
        image3.src = imageSources[currentIndex];
    } else if (currentIndex === 4) {
        image3.classList.add('active');
        image3.src = imageSources[currentIndex];
    } 
}

// Initial call to display the first image
changeImage();

// Set an interval to change the image every 5 seconds
setInterval(changeImage, 5000);
