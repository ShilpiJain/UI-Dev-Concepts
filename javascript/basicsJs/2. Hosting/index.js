// Variable Hosting
console.log(b); // not define
console.log(a); // undefined
var a = 2;
console.log(a); // 1

// Function Hosting
// JavaScript functions can be loosely classified as the following:
// Topics Cover :-  Not define vs undefine, variable Hosting, Function Hosting, Local Variable vs Global Varable.

// 1.) Function declarations
hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

// 2.) Function expressions
expression(); //Output: "TypeError: expression is not a function

var expression = function() {
  console.log('Will this work?');
};

// 3.) Let's try the combination of a function declaration and expression.
expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};
// The variable declaration var expression is hoisted,
// but it's assignment to a function is not. Therefore,'
// the intepreter throws a TypeError since it sees expression as a variable and not a function.

// Order of precedence
// 1.) Variable assignment over function declaration
var double = 22;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: number

// 2.) Function declarations over variable declarations
var double;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: function