const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");;
ALERT.classList.add("hide");

function reveal(e) {

    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");

}

CTA.onclick = reveal;
CTA.onclick = console.log("The button was clicked");

CTA.addEventListener("click", reveal, false);