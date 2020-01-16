// JavaScripts Debugging freeCodeCamp

// Debugging: Use the JavaScript Console to Check the Value of a Variable

let sumAB = a + b;
console.log(a);

// Debugging: Understanding the Differences between the freeCodeCamp and Browser Console
console.clear();
console.log(output);

// Debugging: Use typeof to Check the Type of a Variable
console.log(typeof three);
console.log(typeof seven);

// Debugging: Catch Misspelled Variable and Function Names
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// Debugging: Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);

// Debugging: Catch Mixed Usage of Single and Double Quotes
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// Debugging: Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "to come";

if (x == y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}

console.log(result);

// Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
let result = getNine();
console.log(result);

// Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function
let power = raiseToPower(base, exp);

// Debugging: Catch Off By One Errors When Using Indexing
for (let i = 0; i < len; i++)

// Debugging: Use Caution When Reinitializing Variables Inside a Loop
    row = [];
for (let j = 0; j < n; j++)

// Debugging: Prevent Infinite Loops with a Valid Terminal Condition
 function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}
