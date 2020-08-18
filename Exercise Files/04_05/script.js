//anonymous functions

var a = 241/4;
var b = 44/4;

var theBiggest = function() { //this is the anonymous function placed into a var
    var result;
    a > b ? result = ["a", a] : result = ["b", b];

    //console.log(result);

    return result;
}

//theBiggest();

console.log(theBiggest());