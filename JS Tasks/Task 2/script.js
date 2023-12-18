/* ------------------------------ TASK 2 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function ObjectKeys(object) {
  return Object.keys(object);
}

const keysArray = ObjectKeys(audi);
console.log("Object Keys:", keysArray);
