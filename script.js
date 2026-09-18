let currentScreen = 1;

function nextScreen(screenNumber) {
    document.getElementById("screen" + currentScreen).classList.remove("active");

    currentScreen = screenNumber;

    document.getElementById("screen" + currentScreen).classList.add("active");
}


// When he clicks YES ❤️
function yesClicked() {
    if (currentScreen < 4) {
        nextScreen(currentScreen + 1);
    } else {
        nextScreen(5);
    }
}


// When he clicks NO 😭
function noClicked() {

    // On the first few screens, move to the next cute question
    if (currentScreen < 3) {
        nextScreen(currentScreen + 1);
    }

    // On screen 3, make the NO button run away
    else if (currentScreen === 3) {

        const noButton = document.querySelector(
            "#screen3 .no-btn"
        );

        noButton.style.position = "absolute";

        const maxX = 180;
        const maxY = 120;

        const randomX = Math.random() * maxX - maxX / 2;
        const randomY = Math.random() * maxY - maxY / 2;

        noButton.style.transform =
            `translate(${randomX}px, ${randomY}px)`;
    }
}


// Create floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    const duration =
        Math.random() * 3 + 4;

    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 0
            },
            {
                transform: "translateY(-100vh)",
                opacity: 1
            }
        ],
        {
            duration: duration * 1000,
            easing: "linear"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


// New heart every 700 milliseconds
setInterval(createHeart, 700);