const phrases = ["Founder of Vast™", "Graphic Designer", "Sports Enthusiast", "Building something new"];
let pIndex = 0; let cIndex = 0; let isDel = false;

function typeWriter() {
    const current = phrases[pIndex];
    const el = document.getElementById("typewriter");
    
    if (isDel) {
        el.textContent = current.substring(0, cIndex - 1);
        cIndex--;
    } else {
        el.textContent = current.substring(0, cIndex + 1);
        cIndex++;
    }

    let speed = isDel ? 50 : 100;

    if (!isDel && cIndex === current.length) {
        speed = 2000;
        isDel = true;
    } else if (isDel && cIndex === 0) {
        isDel = false;
        pIndex = (pIndex + 1) % phrases.length;
        speed = 500;
    }

    setTimeout(typeWriter, speed);
}

const enterScreen = document.getElementById("enter-screen");
const mainContent = document.getElementById("main-content");
const video = document.getElementById("bg-video");
const vol = document.getElementById("volume-control");

enterScreen.addEventListener("click", () => {
    enterScreen.style.opacity = "0";
    setTimeout(() => {
        enterScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
        video.play();
        video.volume = 0.8;
        typeWriter();
    }, 500);
});

vol.addEventListener("input", (e) => {
    video.volume = e.target.value;
});
