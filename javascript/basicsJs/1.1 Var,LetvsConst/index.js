// let :- I use `let` when I need to reassign a variable. Because I use one variable to represent one thing, the use case for `let` tends to be for loops or mathematical algorithms.

// var is function scoped and let is block scoped
function scopetest(){
    console.log(a);
    var a = 1;
    if( a === 1 ){
        let b = 4;
        console.log(b); // 4
    }
    console.log(a);  //1
}
scopetest();

function scopetest(){
    console.log(a);
    var a = 1;
    if( a !== 1 ){
        let b = 4;
        console.log(b);
    }
    console.log(a); // 1
    console.log(b); // b is not defined
}
scopetest();

console.log(y); // y is not define
let y = 10; 
console.log(y); // 10

// For practice :- https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/

//  `const` means that the identifier can’t be reassigned. But in object we can change the key value not object.
const objectTest = () => {
    const a = Object.freeze({a: 3});
    const b = 5;
    a.a = 5;
    a.b = 10;
    console.log(a);
}

objectTest();