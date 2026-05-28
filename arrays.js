
console.log(num[0]);
console.log(num.length);
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
num[0]=9;


    //!methods
console.log(num ,typeof num);
console.log(num.toString())
 let num =[100,2,50,90,67,45];

console.log(num.push("rao"));
console.log(num);
console.log(num.pop());
console.log(num);
console.log(num.unshift("sushil"))
console.log(num);
console.log(num.shift());
console.log(num);
console.log(num.join("+"));
console.log(num);
console.log(delete num[2]);
console.log(num);
console.log(num.reduce());
console.log(num);
console.log(num.slice(1,4));
console.log(num.splice(1,5));
console.log(num.reverse());
let arr=[6,8,9,0,5,8];
console.log(num.concat(arr));

     //! loop
     let arr =[1,4,6,7,7,9];
     for (let i = 0; i < arr; i++) {
        const element = arr[index];
        console.log(element);
        }

      for (const value of arr) {
        console.log(arr);
      }
      

         //!advance map

         let arr =[1,4,6,7,7,9];
         let newArr=[]
         for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            newArr.push(element**2)
        }

        let  newArr =arr.map(n=>n*n)
        console.log(newArr)

       //!filter
       let num =[10,9,16,78,15];
       let result  = num.filter(n=>n>15);
       console.log(result)

    ///!reduce
    let num =[10,70,89];
    


