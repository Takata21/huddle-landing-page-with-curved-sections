const top1 = document.getElementById("top-mobile");
const top2 = document.getElementById("top-mobile2");
const bottom1 = document.getElementById("bottom-mobile");
const bottom2 = document.getElementById("bottom-mobile2");
const footerBg = document.getElementById("footer-top-mobile");

const mediaQuery = window.matchMedia("(min-width:720px)");
console.log(mediaQuery);
document.addEventListener("DOMContentLoaded", changeBg());
window.addEventListener("resize", changeBg);

function changeBg() {
    if (mediaQuery) {
        console.log("Hola");
        top1.setAttribute("src", "./static/images/bg-section-top-desktop-1.svg");
        top2.setAttribute(
            top2.setAttribute("src", "./static/images/bg-section-top-desktop-2.svg")
        );
        bottom1.setAttribute(
            top2.setAttribute(
                "src",
                "./static/images/bg-section-bottom-desktop-1.svg"
            )
        );

        bottom2.setAttribute(
            top2.setAttribute(
                "src",
                "./static/images/bg-section-bottom-desktop-2.svg"
            )
        );
        footerBg.setAttribute(
            top2.setAttribute("src", "./static/images/bg-footer-top-desktop.svg")
        );
    } else {
        console.log("bay");
    }
}