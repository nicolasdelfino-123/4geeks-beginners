/* Instrucciones:
Una vez que el usuario ingresa la cantidad, tenemos que imprimir una de las siguientes respuestas:
Si quedan más de 100km, nosotros respondemos: "We still have a bit of driving left to go".
Si quedan más de 50km, pero menos o igual a 100km nosotros respondemos: "We'll be there in 5 minutes".
Si quedan menos o igual a 50km, nosotros respondemos: "I'm parking. I'll see you right now".
💡 Pista:
Usa un condicional If...else para verificar el valor total de la variable.
Puedes usar else if dentro de tu condicional, si es necesario.
Imprime el mensaje correspondiente.
Puedes aprender más al respecto aquí. */


let total = prompt('How many km are left to go?');

// Your code below:

if (total > 50 && total <= 100){
    console.log("We'll be there in 5 minutes");
}else if (total > 100){
    console.log("We still have a bit of driving left to go");
}  else{
    console.log("I'm parking. I'll see you right now")
}