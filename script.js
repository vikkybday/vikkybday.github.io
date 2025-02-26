document.addEventListener("DOMContentLoaded", function() {
    let text = "Happy Birthday to Big Head...";
    let text2 = "...also known as Victory 🎉";
    let i = 0;
    let speed = 100;
    let typingText = document.getElementById("typing-text");

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                typingText.innerHTML += "<br>";
                i = 0;
                typeWriter2();
            }, 500);
        }
    }

    function typeWriter2() {
        if (i < text2.length) {
            typingText.innerHTML += text2.charAt(i);
            i++;
            setTimeout(typeWriter2, speed);
        } else {
            setTimeout(() => {
                document.querySelector(".loading-screen").style.display = "none";
                document.querySelector(".content").classList.remove("hidden");
                document.getElementById("bigHeadCount").innerText = Math.floor(Math.random() * 100);
            }, 1000);
        }
    }

    typeWriter();
});

function showSurprise() {
    document.querySelector(".surprise").classList.remove("hidden");
}