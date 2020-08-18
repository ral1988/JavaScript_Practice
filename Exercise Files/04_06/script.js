//Invoking functional expressions

var a = 14 / 2;
var b = 15 / 2;

var theBiggest = (function(a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(a, b); //this happens as soon as the browser opens the page. If you want to use variables, you have to have them defined before this code. 

console.log(theBiggest);