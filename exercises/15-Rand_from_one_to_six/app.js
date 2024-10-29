/* Instrucciones:
¡Bien! Ahora cambia lo que sea que necesites cambiar para hacer 
que el algoritmo imprima números enteros aleatorios entre 1 y 6.
💡 Pistas:
Debería imprimir entre 1 y 6, no entre 0 y 6.

Este ejercicio es super sencillo, no te compliques... */

function getRandomInt()
{
	let randomNumber = Math.floor(Math.random() * 6) + 1;
	return randomNumber;
}
console.log(getRandomInt());