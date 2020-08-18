function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["First Fraction", a] : result = ["Second Fraction", b];

    console.log("First fraction result: ", a);
    console.log("Second fraction result", b);
    console.log(result[0] + " with a value of " + result[1] + " is the biggest");

    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction,secondFraction);
findBiggestFraction(55 / 1, 22242 / 5);
findBiggestFraction(55 / 10, 22242 / 6);
findBiggestFraction(5532123 / 3310, 222242 / 6.99);

