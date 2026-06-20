let num=[1,6,3,4,10]
smallest=999

for(let i=0; i<num.length; i++){
    if(num[i]<smallest){
       smallest=num[i]
    }
}

 console.log(smallest)