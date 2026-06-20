function sec(arr){
   let largest=-Infinity
   let seclargest=-Infinity
   
    for(let i=0;i<arr.length;i++)
        if(arr[i]>largest){
           seclargest= largest
            largest=arr[i]
        }else if(arr[i]>seclargest && arr[i]!=largest){
            seclargest=arr[i]
        }
console.log(largest)
console.log(seclargest)
}
let arr=[1,3,4,5,6,8]
sec(arr)