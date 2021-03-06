const FEATURED = document.querySelector(".feature-image");
const THEIMAGE = FEATURED.querySelector(".img"); //burrowing into DOM elements without having to traverse the entire DOM tree every time

var altText = THEIMAGE.getAttribute("alt");

var captionElement = document.createElement("figcaption");

var captionText = document.createTextNode(altText);

captionElement.appendChild(captionText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt",""); // second element is blank to not repeat information for screen readers