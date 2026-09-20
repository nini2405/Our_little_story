// =========================================================
// OUR LITTLE STORY — MAIN JAVASCRIPT
// =========================================================


// =========================================================
// LOADING SCREEN
// =========================================================

window.addEventListener("load", function () {

    const loadingScreen =
        document.getElementById("loadingScreen");

    if (!loadingScreen) return;

    setTimeout(function () {

        loadingScreen.classList.add("hide");

        setTimeout(function () {

            if (loadingScreen) {
                loadingScreen.remove();
            }

        }, 1300);

    }, 2800);

});


// =========================================================
// OPEN FIRST PAGE
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const openButton =
        document.getElementById("openButton");

    const intro =
        document.querySelector(".intro");

    const mainContent =
        document.getElementById("mainContent");


    if (openButton) {

        openButton.addEventListener("click", function () {

            if (!intro || !mainContent) return;


            intro.style.transition =
                "opacity 1s ease, transform 1s ease";

            intro.style.opacity = "0";

            intro.style.transform =
                "scale(1.03)";


            setTimeout(function () {

                intro.style.display = "none";

                mainContent.style.display = "block";

                window.scrollTo({
                    top: 0,
                    behavior: "auto"
                });


                const memory =
                    document.querySelector(".memory-wrapper");

                if (memory) {
                    memory.classList.add("show");
                }

            }, 1000);

        });

    }


    createGalaxy();

    createCursorGlow();

});


// =========================================================
// GALAXY
// =========================================================

function createGalaxy() {

    const starContainer =
        document.createElement("div");

    starContainer.className =
        "galaxy-stars";

    document.body.appendChild(starContainer);


    for (let i = 0; i < 180; i++) {

        const star =
            document.createElement("span");

        star.className =
            "galaxy-star";

        star.style.setProperty(
            "--size",
            (Math.random() * 2.5 + 0.7) + "px"
        );

        star.style.setProperty(
            "--x",
            Math.random() * 100 + "%"
        );

        star.style.setProperty(
            "--y",
            Math.random() * 100 + "%"
        );

        star.style.setProperty(
            "--opacity",
            Math.random() * 0.65 + 0.2
        );

        star.style.setProperty(
            "--duration",
            (Math.random() * 4 + 2) + "s"
        );

        star.style.setProperty(
            "--delay",
            Math.random() * 5 + "s"
        );

        starContainer.appendChild(star);
    }


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


    const moon =
        document.createElement("div");

    moon.className =
        "galaxy-moon";

    document.body.appendChild(moon);


    for (let i = 0; i < 3; i++) {

        const shootingStar =
            document.createElement("div");

        shootingStar.className =
            "shooting-star";

        document.body.appendChild(shootingStar);

    }

}


// =========================================================
// CURSOR GLOW
// =========================================================

function createCursorGlow() {

    if (window.innerWidth <= 700) return;


    const glow =
        document.createElement("div");

    glow.className =
        "cursor-glow";

    document.body.appendChild(glow);


    let mouseX =
        window.innerWidth / 2;

    let mouseY =
        window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;


    document.addEventListener(
        "mousemove",
        function (event) {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        }
    );


    function animate() {

        currentX +=
            (mouseX - currentX) * 0.08;

        currentY +=
            (mouseY - currentY) * 0.08;


        glow.style.left =
            currentX + "px";

        glow.style.top =
            currentY + "px";


        requestAnimationFrame(animate);

    }


    animate();

}


// =========================================================
// OPEN WHEN LETTERS
// =========================================================

function openLetter(card) {

    if (!card) return;

    card.classList.toggle("open");

}


// =========================================================
// LOVE CARDS
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const loveCards =
            document.querySelectorAll(".love-card");

        const littleThingsSection =
            document.querySelector(".little-things");


        if (!littleThingsSection) return;


        const observer =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                loveCards.forEach(
                                    function (card) {

                                        card.classList.add(
                                            "show"
                                        );

                                    }
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.2
                }

            );


        observer.observe(
            littleThingsSection
        );

    }
);


// =========================================================
// SONG
// =========================================================

function toggleSong() {

    const song =
        document.getElementById("ourSong");

    const button =
        document.getElementById("playButton");


    if (!song || !button) return;


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
                    "Please check Munbe-vaa.mp3 is inside the project folder."
                );

            });

    } else {

        song.pause();

        button.textContent = "▶";

        button.classList.remove(
            "playing"
        );

    }

}


// =========================================================
// SONG END
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const song =
            document.getElementById("ourSong");

        if (!song) return;


        song.addEventListener(
            "ended",
            function () {

                const button =
                    document.getElementById(
                        "playButton"
                    );

                if (button) {

                    button.textContent = "▶";

                    button.classList.remove(
                        "playing"
                    );

                }

            }
        );

    }
);