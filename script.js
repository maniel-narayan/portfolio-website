// ================================
// Smooth Scroll Buttons
// ================================

const viewProjectsBtn = document.querySelector(".btn");

viewProjectsBtn.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});



// ================================
// Sticky Navbar Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ================================
// Active Navigation
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


new Typed("#typing", {
    strings: [
        "Frontend Developer",
        "Java Programmer",
        "Web Designer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});