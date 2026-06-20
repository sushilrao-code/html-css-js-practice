const add=(a,b)=>{
    return a+b;
}
let result=add(5,10);
console.log(`The sum is: ${result}`);

const subtract=(a,b)=>a-b;
result=subtract(10,5);
console.log(`The difference is: ${result}`);

function greet() {
    console.log("Hello");
}

function execute(callback) {
    callback();
}

execute(greet);