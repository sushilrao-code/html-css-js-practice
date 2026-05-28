let random =Math.random()
console.log(random );
let a =prompt("enter number 1");
let c =prompt("enter operator");
let b =prompt("enter number 2");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}
if(random<0.1){
   console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else
{
    c=obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}