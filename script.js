// =========================================================
// 🌌 OUR LITTLE STORY — GALAXY JAVASCRIPT
// =========================================================


// =========================================================
// 💜 OPEN WEBSITE BUTTON
// =========================================================

const openButton = document.getElementById("openButton");
const intro = document.querySelector(".intro");
const mainContent = document.getElementById("mainContent");


if (openButton) {

    openButton.addEventListener("click", function () {

        // Fade out intro
        if (intro) {

            intro.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            intro.style.opacity = "0";

            intro.style.transform = "scale(1.03)";
        }


        // Show main website
        setTimeout(function () {

            if (intro) {
                intro.style.display = "none";
            }

            if (mainContent) {

                mainContent.style.display = "block";

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
            }


            // Show memory section
            const memory =
                document.querySelector(".memory-wrapper");

            if (memory) {
                memory.classList.add("show");
            }

        }, 1200);

    });

}
// =========================================================
// GALAXY LOADING SCREEN
// =========================================================

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loadingScreen");

    if (!loadingScreen) {
        return;
    }

    setTimeout(function () {

        loadingScreen.classList.add("hide");

        setTimeout(function () {
            loadingScreen.remove();
        }, 1300);

    }, 2800);

});


// =========================================================
// ⭐ CREATE GALAXY
// =========================================================

function createGalaxy() {

    // Main star container
    const starContainer =
        document.createElement("div");

    starContainer.className =
        "galaxy-stars";

    document.body.appendChild(starContainer);


    // Create 180 stars
    for (let i = 0; i < 180; i++) {

        const star =
            document.createElement("span");

        star.className =
            "galaxy-star";


        const size =
            (Math.random() * 2.5 + 0.7).toFixed(2);

        const x =
            Math.random() * 100;

        const y =
            Math.random() * 100;

        const opacity =
            (Math.random() * 0.65 + 0.2).toFixed(2);

        const duration =
            (Math.random() * 4 + 2).toFixed(2);

        const delay =
            (Math.random() * 5).toFixed(2);


        star.style.setProperty(
            "--size",
            size + "px"
        );

        star.style.setProperty(
            "--x",
            x + "%"
        );

        star.style.setProperty(
            "--y",
            y + "%"
        );

        star.style.setProperty(
            "--opacity",
            opacity
        );

        star.style.setProperty(
            "--duration",
            duration + "s"
        );

        star.style.setProperty(
            "--delay",
            delay + "s"
        );


        starContainer.appendChild(star);
    }


    // =====================================================
    // 🌌 NEBULA
    // =====================================================

    const nebulaOne =
        document.createElement("div");

    nebulaOne.className =
        "galaxy-nebula one";

    document.body.appendChild(nebulaOne);


    const nebulaTwo =
        document.createElement("div");

    nebulaTwo.className =
        "galaxy-nebula two";

    document.body.appendChild(nebulaTwo);


    // =====================================================
    // 🌙 MOON
    // =====================================================

    const moon =
        document.createElement("div");

    moon.className =
        "galaxy-moon";

    document.body.appendChild(moon);


    // =====================================================
    // ☄️ SHOOTING STARS
    // =====================================================

    for (let i = 0; i < 3; i++) {

        const shootingStar =
            document.createElement("div");

        shootingStar.className =
            "shooting-star";

        document.body.appendChild(shootingStar);
    }

}


// =========================================================
// 💫 FLOATING HEARTS
// =========================================================

function createFloatingHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        Math.random() > 0.5 ? "♡" : "✦";


    const size =
        Math.random() * 12 + 10;

    const duration =
        Math.random() * 8 + 8;

    const drift =
        Math.random() * 100 - 50;


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.setProperty(
        "--heart-size",
        size + "px"
    );


    heart.style.setProperty(
        "--heart-duration",
        duration + "s"
    );


    heart.style.setProperty(
        "--heart-drift",
        drift + "px"
    );


    document.body.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


// Create hearts occasionally
setInterval(function () {

    // Don't overdo it
    if (document.hidden) return;

    createFloatingHeart();

}, 4500);


// =========================================================
// 🖱️ CURSOR GLOW
// =========================================================

function createCursorGlow() {

    // Don't create on mobile
    if (window.innerWidth <= 700) {
        return;
    }


    const glow =
        document.createElement("div");

    glow.className =
        "cursor-glow";

    document.body.appendChild(glow);


    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;


    document.addEventListener(
        "mousemove",
        function (event) {

            mouseX = event.clientX;
            mouseY = event.clientY;

        }
    );


    function animateCursor() {

        currentX +=
            (mouseX - currentX) * 0.08;

        currentY +=
            (mouseY - currentY) * 0.08;


        glow.style.left =
            currentX + "px";

        glow.style.top =
            currentY + "px";


        requestAnimationFrame(
            animateCursor
        );
    }


    animateCursor();

}


// =========================================================
// 💌 OPEN WHEN LETTERS
// =========================================================

function openLetter(card) {

    if (!card) return;

    card.classList.toggle("open");

}


// =========================================================
// ✨ LOVE CARDS ANIMATION
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
// 🎵 SONG PLAYER
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

                button.classList.add(
                    "playing"
                );

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

        button.classList.remove(
            "playing"
        );

    }

}


// =========================================================
// 🎵 RESET BUTTON WHEN SONG ENDS
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

                button.classList.remove(
                    "playing"
                );
            }

        }
    );

}


// =========================================================
// 🌌 START GALAXY
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createGalaxy();

        createCursorGlow();

    }
);