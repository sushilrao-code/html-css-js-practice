function facts(n){
    if(n==0 || n==1){
        return 1;
    }
    return n *facts(n-1);
}
let number = 5;
let result = facts(number);
console.log("The factorial of " + number + " is: " + result);