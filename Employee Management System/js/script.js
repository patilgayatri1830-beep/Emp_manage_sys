```javascript
/* =========================================
   EMPLOYEE MANAGEMENT SYSTEM
   Main JavaScript File
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const navLinks = document.querySelectorAll(".navbar nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =========================================
       SMOOTH SCROLLING
    ========================================= */

    const featureLink = document.querySelector(
        '.navbar nav a[href="#features"]'
    );

    if (featureLink) {

        featureLink.addEventListener("click", function (event) {

            event.preventDefault();

            const featuresSection =
                document.getElementById("features");

            if (featuresSection) {

                featuresSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const featureCards =
        document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    featureCards.forEach(function (card) {

        observer.observe(card);

    });


    /* =========================================
       BUTTON CLICK EFFECT
    ========================================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {

                this.style.transform = "";

            }, 120);

        });

    });


    /* =========================================
       CURRENT YEAR IN FOOTER
    ========================================= */

    const copyright =
        document.querySelector(".copyright p");

    if (copyright) {

        const currentYear =
            new Date().getFullYear();

        copyright.innerHTML =
            "© " +
            currentYear +
            " Employee Management System. All Rights Reserved.";

    }


    /* =========================================
       HERO STAT COUNTER ANIMATION
    ========================================= */

    const statNumbers =
        document.querySelectorAll(".stat-box h2");

    statNumbers.forEach(function (stat) {

        const originalText =
            stat.textContent.trim();

        const number =
            parseInt(originalText);

        if (isNaN(number)) {
            return;
        }

        const suffix =
            originalText.replace(number, "");

        let current = 0;

        const increment =
            Math.ceil(number / 50);

        const counter =
            setInterval(function () {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(counter);

                }

                stat.textContent =
                    current + suffix;

            }, 25);

    });


    /* =========================================
       WELCOME MESSAGE
    ========================================= */

    console.log(
        "Employee Management System loaded successfully."
    );

});
```
