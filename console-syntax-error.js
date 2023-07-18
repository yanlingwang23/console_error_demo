// Once it detects syntax error, the other errors won't show up in the console.
// Hence we're not going to test codes that will throw out syntax error here.
// SyntaxError: "use strict" not allowed in function with default parameter
function sum(a = 1, b = 2) {
    "use strict";
    return a + b;
}