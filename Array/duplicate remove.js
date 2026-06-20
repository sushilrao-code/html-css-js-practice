let num=[1,6,3,4,4,4,5,5,10]

let result=[]
let k=0;
for(let i=0; i<num.length; i++){
    let duplicate=false
    for(let j=0; j<k ;j++){
        if(num[i]==result[j]){
            duplicate=true;
            break;
        }
    }
    if(!duplicate){
        result[k]=num[i]
        k++
    }
        
}
console.log(result)