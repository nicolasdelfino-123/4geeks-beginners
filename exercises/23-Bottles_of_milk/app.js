// Your code here:

function song(){
    let str = "";
    
    for(let i = 99; i > 0; i--){
        
        str += i + " bottles of milk on the wall, "
        str += i + " bottles of milk."
        str += "Take one down and pass it around, "
        str += (i - 1) + " bottles of milk on the wall."
        if (i === 1){
            str += i + " bottle of milk on the wall," + i + " bottle of milk."
            str += "Take one down and pass it around, no more bottles of milk on the wall. "
            str += "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
            break;
        }

        
    }
    return str;
    
}

console.log(song());

/*99 bottles of milk on the wall, 99 bottles of milk. 
Take one down and pass it around, 
98 bottles of milk on the wall.`

`98 bottles of milk on the wall, 98 bottles of milk. 
Take one down and pass it around, 
97 bottles of milk on the wall.`

...

`1 bottle of milk on the wall, 1 bottle of milk. 
Take one down and pass it around, no more bottles of milk on the wall.`

`No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 
99 bottles of milk on the wall.` */