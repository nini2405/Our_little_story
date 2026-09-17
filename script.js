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
// 🌌 FINAL GALAXY EFFECTS
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       🌌 CREATE GALAXY BACKGROUND
       ===================================================== */

    const galaxy = document.createElement("div");

    galaxy.className = "galaxy-background";

    document.body.prepend(galaxy);


    /* =====================================================
       ⭐ CREATE STARS
       ===================================================== */

    const starCount = 100;

    for (let i = 0; i < starCount; i++) {

        const star = document.createElement("div");

        star.className = "galaxy-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            Math.random() * 2 + 0.6;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        galaxy.appendChild(star);
    }


    /* =====================================================
       ✦ CREATE SPARKLE STARS
       ===================================================== */

    const sparkleCount = 15;

    for (let i = 0; i < sparkleCount; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.className =
            "galaxy-sparkle";

        sparkle.textContent = "✦";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        sparkle.style.animationDelay =
            Math.random() * 5 + "s";

        sparkle.style.fontSize =
            (Math.random() * 7 + 7) + "px";

        galaxy.appendChild(sparkle);
    }


    /* =====================================================
       ☄️ SHOOTING STARS
       ===================================================== */

    for (let i = 0; i < 3; i++) {

        const shootingStar =
            document.createElement("div");

        shootingStar.className =
            "shooting-star";

        shootingStar.style.left =
            (60 + Math.random() * 35) + "%";

        shootingStar.style.top =
            Math.random() * 45 + "%";

        shootingStar.style.animationDelay =
            (i * 4) + "s";

        galaxy.appendChild(shootingStar);
    }


    /* =====================================================
       🌙 CREATE MOON
       ===================================================== */

    const intro =
        document.querySelector(".intro");

    if (intro) {

        const moon =
            document.createElement("div");

        moon.className =
            "galaxy-moon";

        intro.appendChild(moon);
    }

});


// =========================================================
// 🎵 MUSIC PLAYING EFFECT
// =========================================================

const song =
    document.getElementById("ourSong");

const playButton =
    document.getElementById("playButton");

const songCard =
    document.querySelector(".song-card");


if (song && playButton) {

    song.addEventListener("play", function () {

        playButton.textContent = "⏸";

        if (songCard) {
            songCard.classList.add("is-playing");
        }

    });


    song.addEventListener("pause", function () {

        playButton.textContent = "▶";

        if (songCard) {
            songCard.classList.remove("is-playing");
        }

    });


    song.addEventListener("ended", function () {

        playButton.textContent = "▶";

        if (songCard) {
            songCard.classList.remove("is-playing");
        }

    });

}