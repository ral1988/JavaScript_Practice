function findBiggestFraction(a,b) {
    //console.log("The function is running!");

    var result;
    a > b ? result = ["firstFraction: ", a] : result = ["secondFraction: ", b];

    console.log(result);
}

var aF = 3 / 4;
var bF = 5 / 7;

findBiggestFraction(aF,bF);
findBiggestFraction(15/66, 1222515251525125/5);
findBiggestFraction(159/66, 1222515251525125/999999999);