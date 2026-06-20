function sqr(n){
    return n * n;
}
let result= sqr(4);
console.log("The square of 4 is: " + result);

function cube(n){
    return n * n * n;
}
result = cube(3);
console.log("The cube of 3 is: " + result);

function power(base, exponent){
    let result = 1;
    for(let i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}
result = power(2, 5);
console.log("2 raised to the power of 5 is: " + result);
function evenOrOdd(n){
    if(n % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }   
}
let number = 7;
let results = evenOrOdd(number);
console.log(number + " is " + results);