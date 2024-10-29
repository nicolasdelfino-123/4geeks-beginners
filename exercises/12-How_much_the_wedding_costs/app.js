/*Instrucciones:
Crea una función getPrice que reciba la cantidad de personas que van a asistir 
a la boda y devuelve el precio correspondiente en la consola.
📎 Ejemplo:
Por ejemplo, si el usuario dice que 20 personas van a asistir a la boda, 
el valor retornado debe ser 4000.
💡 Pista:
Usa un condicional if...else para dividir tu código y establecer el valor de la variable price correctamente.
Divide y vencerás: divide un problema en partes más pequeñas, más fáciles de resolver. */

let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50){
        cost = 4000;
    }
    else if(guests <= 100){
        cost = 10000;
    }
    else if(guests <= 200){
        cost = 15000;
    }else{
        cost = 20000
    }

    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
