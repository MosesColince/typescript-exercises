class Calculator { 
    add(x: number, y: number): number {
        return x + y ;
    }
    sub(x: number, y: number): number {
        return x - y ;
    }
    div(x: number, y: number): number | string {
        if ( y == 0 ){
            return "Error"; }

            return x / y ;
        }
    mult(x: number, y: number): number {
        return x * y ;
    }
}

const calculator = new Calculator();
const addition = calculator.add(7,2);
console.log(addition);

const division = calculator.div(7,2);
console.log(division);

const multiplication = calculator.mult(7,2);
console.log(multiplication);

const substraction = calculator.sub(7,2);
console.log(substraction);