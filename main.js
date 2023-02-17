/**
 * print all even numbers from 0 - 10
 * 
 * /
 * 
 * 
 * 
 * define the start and stop values
 * loop through from 0 to 11 to get the range
 * get the modulus to determine whether it is even 
 */


let startvalue = 0;
let stopvalue = 11;
// loop

for(startvalue; startvalue < stopvalue ; startvalue++){
    getModulus(startvalue);
}
// function
function getModulus(Value){
    let y =Value %2;
    if(y === 0){
        console.log (Value," is EVEN!")
    }
}