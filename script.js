// =========================================================
// 🌌 OUR LITTLE STORY — GALAXY SCRIPT
// =========================================================


// =========================================================
// OPEN WEBSITE
// =========================================================

const openButton = document.getElementById("openButton");
const intro = document.querySelector(".intro");
const mainContent = document.getElementById("mainContent");

if (openButton) {

    openButton.addEventListener("click", function () {

        intro.style.transition =
            "opacity 1.2s ease, transform 1.2s ease";

        intro.style.opacity = "0";
        intro.style.transform = "scale(1.03)";

        setTimeout(function () {

            intro.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

            const memory =
                document.querySelector(".memory-wrapper");

            if (memory) {
                memory.classList.add("show");
            }

        }, 1200);

    });

}


// =========================================================
// OPEN WHEN LETTERS
// =========================================================

function openLetter(card) {

    if (!card) return;

    card.classList.toggle("open");

}


// =========================================================
// LOVE CARDS ANIMATION
// =========================================================

const loveCards =
    document.querySelectorAll(".love-card");

const littleThingsSection =
    document.querySelector(".little-things");

if (
    loveCards.length > 0 &&
    littleThingsSection &&
    "IntersectionObserver" in window
) {

    const cardObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        loveCards.forEach(
                            function (card) {

                                card.classList.add("show");

                            }
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );

    cardObserver.observe(
        littleThingsSection
    );

}


// =========================================================
// 🎵 SONG PLAYER
// =========================================================

function toggleSong() {

    const song =
        document.getElementById("ourSong");

    const button =
        document.getElementById("playButton");

    const songCard =
        document.querySelector(".song-card");

    if (!song || !button) {
        return;
    }


    if (song.paused) {

        song.play()

            .then(function () {

                button.textContent = "⏸";

                if (songCard) {
                    songCard.classList.add(
                        "is-playing"
                    );
                }

            })

            .catch(function () {

                alert(
                    "The song could not be played. Please check the audio file."
                );

            });

    }

    else {

        song.pause();

        button.textContent = "▶";

        if (songCard) {

            songCard.classList.remove(
                "is-playing"
            );

        }

    }

}


// =========================================================
// 🎵 SONG EVENTS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const song =
            document.getElementById("ourSong");

        const button =
            document.getElementById("playButton");

        const songCard =
            document.querySelector(".song-card");


        if (!song || !button) {
            return;
        }


        song.addEventListener(
            "play",
            function () {

                button.textContent = "⏸";

                if (songCard) {
                    songCard.classList.add(
                        "is-playing"
                    );
                }

            }
        );


        song.addEventListener(
            "pause",
            function () {

                button.textContent = "▶";

                if (songCard) {
                    songCard.classList.remove(
                        "is-playing"
                    );
                }

            }
        );


        song.addEventListener(
            "ended",
            function () {

                button.textContent = "▶";

                if (songCard) {
                    songCard.classList.remove(
                        "is-playing"
                    );
                }

            }
        );

    }
);


// =========================================================
// 🌌 GALAXY BACKGROUND
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const galaxy =
            document.createElement("div");

        galaxy.className =
            "galaxy-background";

        document.body.prepend(galaxy);


        // =================================================
        // ⭐ SMALL STARS
        // =================================================

        const starCount = 130;

        for (let i = 0; i < starCount; i++) {

            const star =
                document.createElement("span");

            star.className =
                "galaxy-star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";


            const size =
                Math.random() * 2.2 + 0.5;

            star.style.width =
                size + "px";

            star.style.height =
                size + "px";


            star.style.animationDelay =
                Math.random() * 5 + "s";


            star.style.animationDuration =
                Math.random() * 4 + 2 + "s";


            galaxy.appendChild(star);

        }


        // =================================================
        // ✦ BIGGER SPARKLES
        // =================================================

        const sparkleSymbols =
            ["✦", "✧", "⋆", "✦"];


        for (let i = 0; i < 18; i++) {

            const sparkle =
                document.createElement("span");

            sparkle.className =
                "galaxy-sparkle";

            sparkle.textContent =
                sparkleSymbols[
                    Math.floor(
                        Math.random() *
                        sparkleSymbols.length
                    )
                ];


            sparkle.style.left =
                Math.random() * 100 + "%";

            sparkle.style.top =
                Math.random() * 100 + "%";


            sparkle.style.animationDelay =
                Math.random() * 6 + "s";


            sparkle.style.fontSize =
                Math.random() * 9 + 7 + "px";


            galaxy.appendChild(sparkle);

        }


        // =================================================
        // ☄️ SHOOTING STARS
        // =================================================

        for (let i = 0; i < 4; i++) {

            const shootingStar =
                document.createElement("span");

            shootingStar.className =
                "shooting-star";


            shootingStar.style.left =
                55 + Math.random() * 45 + "%";

            shootingStar.style.top =
                Math.random() * 55 + "%";


            shootingStar.style.animationDelay =
                i * 4 + "s";


            galaxy.appendChild(
                shootingStar
            );

        }


        // =================================================
        // 🌙 MOON
        // =================================================

        const intro =
            document.querySelector(".intro");


        if (intro) {

            const moon =
                document.createElement("div");

            moon.className =
                "galaxy-moon";

            intro.appendChild(moon);

        }

    }
);


// =========================================================
// ✨ MOUSE GLOW
// =========================================================

document.addEventListener(
    "mousemove",
    function (event) {

        document.documentElement.style.setProperty(
            "--mouse-x",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            event.clientY + "px"
        );

    }
);