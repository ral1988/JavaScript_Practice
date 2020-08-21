const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//let hrPosition = 20;
//let minPosition = 130;
//let secPosition = 50;

var date = new Date();
console.log(date);


let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let secPosition = 360/60 * sec;
let minPosition = (360/60 * min) + (secPosition/60);
let hrPosition = (360/12 * hr) + (minPosition/60);









HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

