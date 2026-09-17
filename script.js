// =========================
// OPEN WEBSITE BUTTON
// =========================

const openButton = document.getElementById("openButton");
const intro = document.querySelector(".intro");
const mainContent = document.getElementById("mainContent");

openButton.addEventListener("click", function () {

    // Fade out intro
    intro.style.transition = "opacity 1.2s ease, transform 1.2s ease";
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.03)";

    // Show main website
    setTimeout(function () {

        intro.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo(0, 0);

        // Show photo section
        const memory = document.querySelector(".memory-wrapper");

        if (memory) {
            memory.classList.add("show");
        }

    }, 1200);

});


// =========================
// OPEN WHEN LETTERS
// =========================

function openLetter(card) {

    card.classList.toggle("open");

}


// =========================
// LOVE CARDS ANIMATION
// =========================

const loveCards = document.querySelectorAll(".love-card");

const cardObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                loveCards.forEach(function (card) {

                    card.classList.add("show");

                });

            }

        });

    },
    {
        threshold: 0.2
    }
);


const littleThingsSection =
    document.querySelector(".little-things");

if (littleThingsSection) {

    cardObserver.observe(littleThingsSection);

}


function toggleSong() {

    const song = document.getElementById("ourSong");
    const button = document.getElementById("playButton");

    if (!song || !button) {
        return;
    }

    if (song.paused) {

        song.play()
            .then(function () {
                button.textContent = "⏸";
            })
            .catch(function () {
                alert("The song could not be played. Please check the audio file.");
            });

    } else {

        song.pause();
        button.textContent = "▶";

    }
}
// =========================================================
// 🌌 GALAXY EFFECTS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // ---------- CREATE STARS ----------

    const starCount = 90;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");

        star.classList.add("galaxy-star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        document.body.appendChild(star);
    }


    // ---------- SHOOTING STARS ----------

    for (let i = 0; i < 3; i++) {

        const shootingStar =
            document.createElement("div");

        shootingStar.classList.add("shooting-star");

        shootingStar.style.top =
            Math.random() * 45 + "%";

        shootingStar.style.left =
            (50 + Math.random() * 45) + "%";

        shootingStar.style.animationDelay =
            (i * 4) + "s";

        document.body.appendChild(shootingStar);
    }


    // ---------- MOON ----------

    const intro =
        document.querySelector(".intro");

    if (intro) {

        const moon =
            document.createElement("div");

        moon.classList.add("galaxy-moon");

        intro.appendChild(moon);
    }

});