/* ===================================
   MOBILE MENU
=================================== */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});

/* ===================================
   CLOSE MENU AFTER CLICK
=================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

/* ===================================
   NAVBAR SHADOW
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 30){

        header.style.boxShadow =
        "0 10px 35px rgba(15,23,42,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});

/* ===================================
   ACTIVE MENU
=================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/* ===================================
   REVEAL ANIMATION
=================================== */

const reveals = document.querySelectorAll(

".hero,.about,.skills,.projects,.certificates,.contact"

);

function revealSection(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

window.addEventListener("load", revealSection);

/* ===================================
   SMOOTH HOVER EFFECT
=================================== */

const cards = document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.contact-card,.info-card"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".35s";

    });

});