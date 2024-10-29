/* Instrucciones:
Arregla el bucle while para que funcione y no genere un bucle infinito.

Imprime del 100 al 0.

Devuelve la variable counter cuando llegue a 0. */


//fix this function:

function startCounting() {
	let counter = 100;
	while (counter <= 100 && counter >= 0) {
		console.log(counter);
		counter--;
	}

	return counter;
}

startCounting();