// Write a function that would allow you to do this.?
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

var createBase = function (a) {
        return function (b) {
                return a + b;
        }
}
var addSix = createBase(6)
addSix(10) //16
addSix(21) //27