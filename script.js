/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu after selecting a section */

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navItems.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        `#${currentId}`
                    ) {
                        link.classList.add("active");
                    }

                });

            }

        });

    },

    {
        threshold: 0.25
    }

);


sections.forEach((section) => {
    observer.observe(section);
});


/* =========================================
   IMAGE FALLBACK
========================================= */

const projectImages = document.querySelectorAll(
    ".project-image img, .portrait-frame img"
);


projectImages.forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        image.parentElement.classList.add(
            "image-placeholder"
        );

    });

});


/* =========================================
   SUBTLE PARALLAX EFFECT
========================================= */

const portrait = document.querySelector(
    ".portrait-frame img"
);


if (
    portrait &&
    !window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches
) {

    window.addEventListener("scroll", () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight) {

            portrait.style.transform =
                `translateY(${scrollPosition * 0.04}px)`;

        }

    });

}
