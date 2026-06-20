function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log(sum(10, 20, 30,40,50));

//!String Reverse
function rev(str){
    let revers=str.split('').reverse().join('')
    return revers;
}
let str="sushil"
result=rev(str)
console.log(result)

//!Array Largest
function lar(){
    let arr=[5,7,8,6]
    let maxs=Math.max(...arr)
    return maxs;
}
console.log(lar())
