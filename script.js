// =========================================================
// US, SOMEHOW ♡
// GALAXY LOVE JAVASCRIPT
// =========================================================


// =========================================================
// CREATE GALAXY BACKGROUND
// =========================================================

function createGalaxy() {

    // Galaxy container
    const galaxy = document.createElement("div");

    galaxy.className = "galaxy-background";

    document.body.prepend(galaxy);


    // Star container
    const starContainer = document.createElement("div");

    starContainer.className = "galaxy-stars";

    galaxy.appendChild(starContainer);


    // Create stars
    const numberOfStars = window.innerWidth < 600 ? 100 : 180;

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.className = "galaxy-star";


        // Random position
        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";


        // Random size
        const size = Math.random() * 2 + 1;

        star.style.width = size + "px";

        star.style.height = size + "px";


        // Random animation
        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            2 + Math.random() * 4 + "s";


        // Some stars become bigger
        if (Math.random() > 0.88) {

            star.classList.add("big");

        }


        starContainer.appendChild(star);
    }
}


// =========================================================
// CREATE MOON
// =========================================================

function createMoon() {

    const intro = document.querySelector(".intro");

    if (!intro) {
        return;
    }


    const moon = document.createElement("div");

    moon.className = "galaxy-moon";

    intro.appendChild(moon);
}


// =========================================================
// CREATE SHOOTING STARS
// =========================================================

function createShootingStar() {

    const shootingStar =
        document.createElement("div");

    shootingStar.className =
        "shooting-star";


    // Random starting position

    shootingStar.style.left =
        (20 + Math.random() * 75) + "%";

    shootingStar.style.top =
        (5 + Math.random() * 50) + "%";


    document.body.appendChild(shootingStar);


    // Start animation

    setTimeout(function () {

        shootingStar.classList.add("active");

    }, 50);


    // Remove after animation

    setTimeout(function () {

        shootingStar.remove();

    }, 1800);
}


// Create shooting star every few seconds

setInterval(function () {

    createShootingStar();

}, 4500);


// =========================================================
// START GALAXY
// =========================================================

createGalaxy();

createMoon();


// =========================================================
// OPEN WEBSITE BUTTON
// =========================================================

const openButton =
    document.getElementById("openButton");

const intro =
    document.querySelector(".intro");

const mainContent =
    document.getElementById("mainContent");


if (openButton) {

    openButton.addEventListener(
        "click",
        function () {

            // Fade intro

            intro.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            intro.style.opacity = "0";

            intro.style.transform =
                "scale(1.03)";


            // Show website

            setTimeout(function () {

                intro.style.display = "none";

                mainContent.style.display = "block";

                window.scrollTo(0, 0);


                // Show memory section

                const memory =
                    document.querySelector(
                        ".memory-wrapper"
                    );


                if (memory) {

                    memory.classList.add("show");

                }

            }, 1200);

        }
    );
}


// =========================================================
// OPEN WHEN LETTERS
// =========================================================

function openLetter(card) {

    if (!card) {
        return;
    }

    card.classList.toggle("open");

}


// =========================================================
// LOVE CARDS ANIMATION
// =========================================================

const loveCards =
    document.querySelectorAll(".love-card");


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


const littleThingsSection =
    document.querySelector(".little-things");


if (littleThingsSection) {

    cardObserver.observe(
        littleThingsSection
    );

}


// =========================================================
// SONG PLAYER
// =========================================================

function toggleSong() {

    const song =
        document.getElementById("ourSong");

    const button =
        document.getElementById("playButton");


    if (!song || !button) {

        return;

    }


    if (song.paused) {

        song.play()

            .then(function () {

                button.textContent = "⏸";

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

    }

}


// =========================================================
// SONG ENDS
// =========================================================

const ourSong =
    document.getElementById("ourSong");


if (ourSong) {

    ourSong.addEventListener(
        "ended",
        function () {

            const button =
                document.getElementById("playButton");

            if (button) {

                button.textContent = "▶";

            }

        }
    );

}


// =========================================================
// SUBTLE MOUSE GLOW
// =========================================================

document.addEventListener(
    "mousemove",
    function (event) {

        const x =
            (event.clientX / window.innerWidth) * 100;

        const y =
            (event.clientY / window.innerHeight) * 100;


        document.documentElement.style.setProperty(
            "--mouse-x",
            x + "%"
        );

        document.documentElement.style.setProperty(
            "--mouse-y",
            y + "%"
        );

    }
);