/* =========================================================
   BHAVYA PATAKHE
   Main JavaScript
   ========================================================= */


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(7, 7, 11, 0.94)";
        navbar.style.borderBottomColor =
            "rgba(231, 184, 90, 0.16)";

    } else {

        navbar.style.background =
            "rgba(7, 7, 11, 0.72)";

        navbar.style.borderBottomColor =
            "rgba(255, 255, 255, 0.10)";
    }
}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".collection-card, " +
    ".about-visual, " +
    ".about-content, " +
    ".gallery-layout, " +
    ".visit-inner, " +
    ".final-cta"
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.75s ease, transform 0.75s ease";

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";

            entry.target.style.transform =
                "translateY(0)";

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   STAGGER COLLECTION CARDS
========================================================= */

const collectionCards =
    document.querySelectorAll(".collection-card");


collectionCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 80}ms`;

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

const navigationLinks =
    document.querySelectorAll(
        '.desktop-nav a[href^="#"], .brand[href^="#"]'
    );


navigationLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   FIREWORK PARTICLES
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


function createParticle() {

    if (!heroVisual) return;

    const particle =
        document.createElement("span");

    particle.className =
        "generated-particle";

    const size =
        Math.random() * 3 + 1;

    const left =
        Math.random() * 100;

    const top =
        Math.random() * 100;

    particle.style.position = "absolute";

    particle.style.width =
        `${size}px`;

    particle.style.height =
        `${size}px`;

    particle.style.left =
        `${left}%`;

    particle.style.top =
        `${top}%`;

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "#e7b85a";

    particle.style.boxShadow =
        "0 0 10px rgba(231,184,90,.9)";

    particle.style.opacity =
        "0";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "2";

    particle.style.transition =
        "opacity 1.5s ease, transform 1.5s ease";

    heroVisual.appendChild(particle);


    requestAnimationFrame(() => {

        particle.style.opacity =
            Math.random() * 0.7 + 0.2;

        particle.style.transform =
            `translateY(-${Math.random() * 25 + 10}px)`;

    });


    setTimeout(() => {

        particle.style.opacity = "0";

        setTimeout(() => {

            particle.remove();

        }, 1500);

    }, 1000);

}


/* Create particles occasionally */

setInterval(createParticle, 450);


/* =========================================================
   BUTTON CLICK FEEDBACK
========================================================= */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach((button) => {

    button.addEventListener("mousedown", () => {

        button.style.transform =
            "scale(0.97)";

    });


    button.addEventListener("mouseup", () => {

        button.style.transform =
            "";

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "";

    });

});


/* =========================================================
   WHATSAPP BUTTON
========================================================= */

const whatsappButtons =
    document.querySelectorAll(
        'a[href*="wa.me"]'
    );


whatsappButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /*
         * WhatsApp links already contain the
         * correct phone number and message.
         *
         * Nothing else is required here.
         */

        console.log(
            "Opening Bhavya Patakhe WhatsApp..."
        );

    });

});


/* =========================================================
   PHONE BUTTON
========================================================= */

const phoneLinks =
    document.querySelectorAll(
        'a[href^="tel:"]'
    );


phoneLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening Bhavya Patakhe phone..."
        );

    });

});


/* =========================================================
   REDUCE MOTION SUPPORT
========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style
        .scrollBehavior = "auto";

    revealElements.forEach((element) => {

        element.style.opacity = "1";

        element.style.transform =
            "none";

        element.style.transition =
            "none";

    });

}


/* =========================================================
   PAGE READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
