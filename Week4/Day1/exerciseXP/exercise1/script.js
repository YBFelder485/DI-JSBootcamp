// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne() //you will receive 3, because a is redefined to 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ? will receive error because const means you cannot redefine

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() //you will get 0 because a is redefined to 0
funcTwo() //now a is 5, because it looks into the parent to find an a variable
funcThree() //a is still 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? will receive error because const means you cannot redefine


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() //will not receive "hello", because window.a does not define a
funcFive() //a is still 0 from above

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() //you get 'test' because that is what is defined in the scope of the function
// #4.2 What will happen if the variable is declared 
// with const instead of let ? //won't change anything because we're not reassigning anything, we're creating a new variable

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console //first will be 5, second will be 2. first within the function, second outside of the block)
// #5.2 What will happen if the variable is declared 
// with const instead of let ? won't change anything, because it's a separate variable, not reassigning a variable
