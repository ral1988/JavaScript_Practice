const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");;
ALERT.classList.add("hide");

function reveal(e) {

    e.preventDefault();
    CTA.classList.toogle("hide");
    ALERT.classList.toogle("hide");

}

CTA.onclick = reveal;
CTA.onclick = console.log("The button was clicked");

