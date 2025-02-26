// Typing effect for loading screen
document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed(".typing-text", {
        strings: ["Happy Birthday to Big Head... 🎂", "Just wait, I have a surprise! 😉"],
        typeSpeed: 70,
        backSpeed: 50,
        loop: false,
        onComplete: function () {
            setTimeout(() => {
                document.getElementById("loading-screen").style.display = "none";
                document.querySelector(".container").style.display = "block";
                startConfetti();
            }, 1000);
        }
    });
});

// Typing effect for the birthday message
let typedText = new Typed(".animated-text", {
    strings: [
        "Vikky, my crush turned bestie... 😊",
        "Remember our crazy jokes and fights? 😂",
        "You're one of the most amazing people I know! 💖",
        "May today be as bright as your smile! 🎂",
        "I would have said more, but my babe is watching... 😏"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: false
});

// Function to play Spotify song
function playMusic() {
    if (!document.getElementById("spotify-player")) {
        let container = document.createElement("div");
        container.innerHTML = `
            <iframe id="spotify-player" style="border-radius:12px; margin-top: 20px;" 
                src="https://open.spotify.com/embed/track/0HRVRl4bHTe0fkng5HAxpg?utm_source=generator" 
                width="80%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>`;
        document.querySelector(".container").appendChild(container);
    }
}

// Confetti effect
function startConfetti() {
    let confettiCanvas = document.getElementById("confetti");
    let confettiCtx = confettiCanvas.getContext("2d");
    let confetti = [];

    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            confetti.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * confettiCanvas.height,
                r: Math.random() * 10 + 5,
                d: Math.random() * 5 + 1,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }
    }

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confetti.forEach((c) => {
            confettiCtx.fillStyle = c.color;
            confettiCtx.beginPath();
            confettiCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2, true);
            confettiCtx.fill();
        });
        moveConfetti();
    }

    function moveConfetti() {
        confetti.forEach((c) => {
            c.y += c.d;
            if (c.y > confettiCanvas.height) {
                c.y = 0;
            }
        });
    }

    createConfetti();
    setInterval(drawConfetti, 30);
}