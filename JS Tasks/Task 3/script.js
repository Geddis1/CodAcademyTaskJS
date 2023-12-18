/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = (a, b) => a + b;
  this.subtraction = (a, b) => a - b;
  this.multiplication = (a, b) => a * b;
  this.division = (a, b) =>
    b !== 0 ? a / b : (console.error("Division by zero is not allowed."), NaN);
}

const calculator = new Calculator();

console.log("Sum:", calculator.sum(5, 3));
console.log("Subtraction:", calculator.subtraction(8, 3));
console.log("Multiplication:", calculator.multiplication(4, 6));
console.log("Division:", calculator.division(10, 2));
console.log("Division by zero:", calculator.division(8, 0));
