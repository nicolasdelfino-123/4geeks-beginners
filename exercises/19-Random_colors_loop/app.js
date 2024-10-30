/* Instrucciones:
Completa la función getAllStudentColors() para que imprima 10 colores aleatorios, un color por cada estudiante.
💡 Pistas:
Tienes 10 estudiantes, necesitas hacer un bucle 10 veces.

Cada vez que hagas un loop, genera un número aleatorio entre 1-4 usando 
la función Math.floor() y Math.random() que vimos en los últimos ejercicios.

Dentro del bucle, también debes llamar a la función getColor() para pasarle los 
números generados aleatoriamente (como argumento) para obtener y devolver un color.

Imprime el color en la consola. */

function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";
		break;
		case 2: return "yellow";
		break;
		case 3: return "blue";
		break;
		case 4: return "green";
		break;
		default: return "black";
		break;
	}
}

function getAllStudentColors() {

	//your loop here
	for(let i = 0; i < 10; i++){
		let exampleColor = getColor(Math.floor(Math.random() * 4) + 1)
		console.log(exampleColor);
	}
	
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

