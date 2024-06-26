"use strict";
let sumFunc = (x, y) => {
    return x + y;
};
console.log(sumFunc(5, 4));
let Numreturn = (num) => {
    return 5;
};
let CondtionReturn = (Stringreturn, word) => {
    if (word == true) {
        return Stringreturn.toLowerCase();
    }
    else if (word == false) {
        return Stringreturn.toUpperCase();
    }
    return "invalid choice";
};
console.log(CondtionReturn("many cows", false));
