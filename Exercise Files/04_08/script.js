//const
//const MYGREATCONSTANT = 5;
//console.log(MYGREATCONSTANT);
// MYGREATCONSTANT = 6; //doesn't work because it's a const

//let
function logScope() {
    let localVar = 2;

    if (localVar) {

        let localVar = "I'm different";
        console.log("nested localVar", localVar);
    }

    console.log("logScope localVar: ", localVar); 

}

logScope();