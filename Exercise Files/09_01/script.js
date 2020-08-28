//Loops lesson

//for

//while
var i = 1;

var reps = 0;

while (i < 567) {
    ++reps;
    console.log(reps + " reps gives us " + i);
    i *= 2.1;
}
//do-while

i = 567;
var reps = 0;

do {
    ++reps;
    console.log("do while version: ", reps + " reps gives us " + i);
    i *= 2.1;
} while (i < 567);

i = 568;
reps = 0;

//if-else
if (i <= 567) {
    do {
        ++reps;
        console.log("do while version: ", reps + " reps gives us " + i);
        i *= 2.1;
    } while (i < 567);
} else {
    console.log("i is ", i);
    console.log("i is bigger than 567")
}