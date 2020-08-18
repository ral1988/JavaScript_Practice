//anonymous functions

var theBiggest = function(a, b) { //this is the anonymous function placed into a var
    var result;
    a > b ? result = ["a", a] : result = ["b", b];

    //console.log(result);

    return result;
}

//theBiggest();

console.log(theBiggest(1/4, 1/3));