function runNumber(num1, num2) {
    return num1 * num2;
}
const result = runNumber(10, 10);
// console.log(result);

function myFunction(theObject) {
    theObject.make = "toyota"
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
}
// console.log(myCar.make)
myFunction(myCar)
// console.log(myCar.make);

//Function expressions
const square = function (number) {
    return number * number;
}
// console.log(square(4));

const factorial = function fac (n) {
    return n < 2 ? 1 : n * fac (n - 1);
}
// console.log(factorial(4));