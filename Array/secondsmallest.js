let num=[1,6,3,4,10]
let smallest=Infinity
let secondsmallest=Infinity
for(let i=0; i<num.length; i++){
    let nums=num[i]
    if(nums<smallest){
        secondsmallest=smallest
        smallest=nums
    }
     
    else if(nums<secondsmallest && nums !==smallest){
        secondsmallest=nums
    }
}
console.log( secondsmallest)