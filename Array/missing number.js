let arr=[2,4,8,10,12,16]

let  misssing=[]
let gap=arr[1]-arr[0]
let start=arr[0]
let end=arr[arr.length-1]

for(let i=start; i<=end; i=i+gap){
    let found=false;

for (let j=0; j<arr.length;j++){
    if(arr[j]===i){
        found=true
    }
}
    if(found===false){
        misssing.push(i);
    }
}
console.log("Missing Number",misssing);
console.log(" Total Missing Number",misssing.length);
