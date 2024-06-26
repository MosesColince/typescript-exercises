"use strict";
class Calculator {
    add(x, y) {
        return x + y;
    }
    sub(x, y) {
        return x - y;
    }
    div(x, y) {
        if (y == 0) {
            return "Error";
        }
        return x / y;
    }
    mult(x, y) {
        return x * y;
    }
}
const calculator = new Calculator();
const addition = calculator.add(7, 2);
console.log(addition);
const division = calculator.div(7, 2);
console.log(division);
const multiplication = calculator.mult(7, 2);
console.log(multiplication);
const substraction = calculator.sub(7, 2);
console.log(substraction);
