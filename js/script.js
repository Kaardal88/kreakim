//Denne funksjonen gjør at header og innholdet i den forsvinner når man scroller ned på Y-aksen. Den dukker opp igjen i det du scroller opp på Y-aksen.
const nav = document.querySelector(".nav");
const header = document.querySelector("header");
const avKim = document.querySelector(".av-kim");
let lastScrollTop = 0;

function handleScroll () {

    const scrolledY = window.scrollY;

    if (scrolledY > 50) {
        document.body.classList.add("scrolled");
        nav.classList.add("scrolled");
        header.classList.add("scrolled");
        avKim.classList.add("scrolled");

        if (scrolledY < lastScrollTop) {
            header.classList.remove("scrolled");
            avKim.classList.remove("scrolled");
            nav.classList.remove("scrolled");
        } else {
            header.classList.add("scrolled");
            avKim.classList.add("scrolled");
            nav.classList.add("scrolled");
        }
        lastScrollTop = scrolledY;
    }

     else  {
        document.body.classList.remove("scrolled");
        nav.classList.remove("scrolled");
        header.classList.remove("scrolled");
        avKim.classList.remove("scrolled");
    }
}
window.addEventListener("scroll", handleScroll)
;























































