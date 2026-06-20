function sqr(...n) {
    let arr=[1,2,3,4]
   let resu=arr.map(n=>n*2)
   return resu;
    }
let result=sqr()
console.log(result)


function num(...n){
    let arr=[1,2,3,4]
    let resu=arr.filter(n=>n%2===0)
    return resu;

}
let result1=num()
console.log(result1)

function li(){
     let arr=[1,2,3,4,5]
    let sum=arr.reduce((n,curr)=>n+curr,0);
    return sum;
}
console.log(li())