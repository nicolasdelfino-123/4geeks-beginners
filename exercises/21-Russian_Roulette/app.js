/* Instrucciones:
El juego casi está funcionando.

Completa la función fireGun() para que el juego funcione. Debes comparar 
la posición de la bala contra la posición de la recámara.
💡 Pistas:
Si la posición de la bala firePosition coincide con la posición de la recámara 
dada por la función spinChamber, la función fireGun() debe devolver You're dead!.

Si la posición de la bala firePosition no coincide con la posición de la recámara 
dada por la función spinChamber, la función fireGun() debe devolver Keep playing!.

La función spinChamber retorna un número entero aleatorio entre 1 y 6.*/
// firePosition will be the position in which the gun will fire.
let firePosition = 1;

// The output of spinChamber will be a number and it can be passed as a parameter to the fireGun function.

//numero aleatorio
const spinChamber = () => {
    let chamberPosition = Math.floor((Math.random() * 6) + 1);
    return chamberPosition;
};


// Remove the // below and complete the commented lines
const fireGun = (bulletPosition) => {
    if (bulletPosition === firePosition) return ("You're dead!");
    else return ("Keep playing!");
    // if (... === firePosition) return ("You're dead!");
    // else return ("Keep playing!");
};

console.log(fireGun(spinChamber()));
