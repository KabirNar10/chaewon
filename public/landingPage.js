const audio = document.getElementById("backgroundMusic");
const audioQuery = document.querySelector("audio");
const menuBtn = document.querySelector('.menuHamburger');
const list = document.querySelector('.rightBarStuff');
const dropdownContent = document.querySelector(".dropdownContent");

let menuOpen = false;
let imageTracker = "i";

window.addEventListener("DOMContentLoaded", event => {
    audioQuery.volume = 1;
    // audioQuery.play(); // Uncomment to enable autoplay
});

function audioController() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}

function imageChange() {
    const image = document.getElementById("audioController");
    const isImageI = imageTracker === "i";

    image.src = isImageI ? "resources/audioControllerOff.png" : "resources/audioControllerOn.png";
    imageTracker = isImageI ? "I" : "i";
}

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    list.classList.toggle('show');
    menuOpen = !menuOpen;
});

function showDropdown() {
    dropdownContent.style.display = "flex";
}

function hideDropdown() {
    dropdownContent.style.display = "none";
}

function showOrHideDropdown() {
    dropdownContent.style.display === "none" ? showDropdown() : hideDropdown();
}
