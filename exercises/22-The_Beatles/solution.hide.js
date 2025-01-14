/* /* "let it be, let it be, let it be, let it be, there will be an answer, let it be, let it be, let it be, let it be, let it be, whisper words of wisdom, let it be" */ */

function sing(){
    let str = "";
    for(let i = 0; i < 11; i++){
        if(i === 4) str += 'there will be an answer, ';
        else if (i === 10) str += 'whisper words of wisdom, let it be';
        else 'let it be, ';
    }
    return str;
}

//Your code above ^^^

console.log(sing());
