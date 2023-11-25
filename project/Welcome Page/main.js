let imgsArray = ["01.jpg", "02.jpeg", "03.jpg", "04.webp", "05.jpg"];
let header = document.querySelector('header');
let backgroundOption = true; // Assuming backgroundOption is a variable controlling the background change
let backgroundInterval;

function randomizeImgs() {
    if (backgroundOption === true) {
        // Change Background Image URL
        backgroundInterval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            header.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
        }, 3000);
    }
}

randomizeImgs();
