/*📝 Instrucciones:
Escribe el código necesario para imprimir en la consola los números del 1 al 100.

Para múltiplos de 3, en vez del número, imprime la palabra Fizz.

Para múltiplos de 5, imprime la palabra Buzz.

Para números que sean múltiplos de 3 y 5, imprime FizzBuzz. */

function fizzBuzz() {  
	// Your code here
	for(let i = 1; i <= 100; i++){
		if ( i % 3 === 0 && i % 5 === 0){
			console.log("FizzBuzz")
		}
		else if (i % 5 === 0){
			console.log("Buzz")
		}
		else if ( i % 3 === 0){
			console.log("Fizz")
		}
		else{
			console.log(i)
		}
	}
}

fizzBuzz();