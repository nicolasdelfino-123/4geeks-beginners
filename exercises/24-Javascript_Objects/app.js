/* 📝 Instrucciones:
De forma automatizada, cambia el cuarto número de la suerte de John Doe (luckyNumber) a 33 (usa un comando, no cambies manualmente el código).

De forma automatizada, crea una nueva persona y añádela al objeto familia. Jimmy Doe, 13, male(masculino), luckyNumbers (números de la suerte): 1, 2, 3, 4; significantOther: null.

Ahora por favor imprime (console.log()) la SUMA de todos los números de la suerte (luckyNumbers) de la familia Doe.

💡 Pistas:
Puedes obtener cada array de números de la suerte (luckyNumbers) desde el objeto de cada persona dentro del objeto familia.

Una vez obtengas cada array, solo has un loop sobre él sumando cada elemento (como hemos hecho hasta ahora). Luego obtén el total de la suma de los 3 miembros de la familia.

null también es un objeto. */

var person = {
  name: "John", //String
  lastName: "Doe",
  age: 35, //Number
  gender: "male",
  luckyNumbers: [7, 11, 13, 17], //Array
  significantOther: person2, //Object, yes, the same variable/object defined after
};

var person2 = {
  name: "Jane",
  lastName: "Doe",
  age: 38,
  gender: "female",
  luckyNumbers: [2, 4, 6, 8],
  significantOther: person,
};

var family = {
  lastName: "Doe",
  members: [person, person2, person3], //Array of objects, don't forget to add Jimmy
};

var person3 = {
  name: "Jimmy",
  lastName: "Doe",
  age: 38,
  gender: "male",
  luckyNumbers: [1, 2, 3, 4],
  significantOther: null,
};

function addAllFamilyLuckyNumbers(anArray) {
  let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
  sumOfAllLuckyNumbers += anArray.luckyNumbers;

  //To-Do: loop and add; consider nested loops
  //Hint: use the anArray variable to get all of the lucky numbers

  return sumOfAllLuckyNumbers;
}

//Enter all your code here:

family.members[0].luckyNumbers[3] = 33;

//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));
