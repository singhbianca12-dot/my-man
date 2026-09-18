let currentScreen = 1;

function nextScreen(screenNumber) {
    document.getElementById("screen" + currentScreen).classList.remove("active");

    currentScreen = screenNumber;

    document.getElementById("screen" + currentScreen).classList.add("active");

}


function yesClicked() {

    // 💗 Heart explosion
    heartExplosion();

    // ✨ Sparkles
    createSparkles();

    setTimeout(() => {

        if (currentScreen < 4) {
            nextScreen(currentScreen + 1);
        } else {
            nextScreen(5);
        }

    }, 500);
}


// ❤️ Heart explosion
function heartExplosion() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = "25px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 180;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.4)`,
                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 800);
    }
}


function noClicked() {

    const noButton = document.querySelector(
        "#screen" + currentScreen + " .no-btn"
    );

    // Shake the button 😭
    noButton.classList.add("shake");

    setTimeout(() => {
        noButton.classList.remove("shake");
    }, 500);

    // Move to the next screen
    if (currentScreen < 3) {
        setTimeout(() => {
            nextScreen(currentScreen + 1);
        }, 500);
    }

    // On screen 3, make NO run away 😂
    else if (currentScreen === 3) {

        setTimeout(() => {

            noButton.style.position = "absolute";

            const maxX = 180;
            const maxY = 120;

            const randomX =
                Math.random() * maxX - maxX / 2;

            const randomY =
                Math.random() * maxY - maxY / 2;

            noButton.style.transform =
                `translate(${randomX}px, ${randomY}px)`;

        }, 500);
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

// Start floating hearts ❤️
setInterval(createHeart, 250);

// Create an extra heart immediately
createHeart();

// ✨ Sparkle effect
function createSparkles() {

    for (let i = 0; i < 20; i++) {

        const sparkle = document.createElement("div");

        sparkle.className = "sparkle";
        sparkle.innerHTML = "✨";

        sparkle.style.left = (40 + Math.random() * 20) + "%";
        sparkle.style.top = (40 + Math.random() * 20) + "%";

        sparkle.style.fontSize =
            (12 + Math.random() * 18) + "px";

        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

const observer = new MutationObserver(() => {
    const activeScreen = document.querySelector(".screen.active");

    if (activeScreen) {
        const screenNumber = activeScreen.id.replace("screen", "");
        changeMoodSticker(Number(screenNumber));
    }
});

observer.observe(document.querySelector(".container"), {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"]
});