const image1 = document.getElementById('image4');
const image2 = document.getElementById('image5');
const image3 = document.getElementById('image9');

const imageSources = ['sub.png', 'wrona.png', 'legion.png'];
let currentIndex = 0;

function changeImage() {
    switch (currentIndex) {
        case 0:
            image1.classList.add('active');
            image2.classList.remove('active');
            image3.classList.remove('active');
            break;
        case 1:
            image1.classList.remove('active');
            image2.classList.add('active');
            image3.classList.remove('active');
            break;
        case 2:
            image1.classList.remove('active');
            image2.classList.remove('active');
            image3.classList.add('active');
            break;
    }

    currentIndex = (currentIndex + 1) % imageSources.length;

    if (currentIndex === 0) {
        image1.src = imageSources[currentIndex];
        image2.src = imageSources[currentIndex + 1];
        image3.src = imageSources[imageSources.length - 1];
    } else if (currentIndex === imageSources.length - 1) {
        image1.src = imageSources[currentIndex];
        image2.src = imageSources[0];
        image3.src = imageSources[currentIndex - 1];
    } else {
        image1.src = imageSources[currentIndex];
        image2.src = imageSources[currentIndex + 1];
        image3.src = imageSources[currentIndex - 1];
    }
}

setInterval(changeImage, 5000);

