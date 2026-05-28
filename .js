// alert("hello world");
// console.log("code is run");
// var a = prompt("enter your number");
// var isTrue = confirm("ooooo");

// if (isTrue) {
//   console.log("computer");
// } else {
//   console.log("your numbwr is ");
// }
// console.log("your numbwr is " + a);

//!Variable
// let x = 'harry';
// let y = 22;
// let z = 3.5;
// let t = null ;
// let m = undefined
// let i = true;
// console.log(y,x,z,t,m,i)
// console.log(typeof y,typeof x,typeof z,typeof t,typeof m ,typeof i)


//!this is object
// let o ={
//     "name": "sushil",
//     "job role":"True",
//     "salary" : 56789
// }
// console.log(o)
// o.salary =10000;
// console.log(o)
// o.age =19;
// console.log(o)

//?Operator

// console.log("5" == 5) // only check the valve
// console.log("5"- 5) // in convert is number
// console.log("5" + 5) //in + one is string bot is convert in string
// console.log("5" * 5) // in convert is number
// console.log("5" / 5) // in convert is number
// console.log("5" != 5)
// console.log("5"===5)
// console.log(5===5) //value and data tyle also is true
// console.log(("5"===5) || (5===5) ) //only one conditon is true
// console.log(("5"==5) || (5===5) ) //both condition is true

// !Ternary operator
// let age = 22;
// let status =(age >=18) ?  "adult" : "Minor";


// ! IF Else
// let age = 45;
// if(age>18){
//     console.log("vote")
// }
// else if(age>0){
//     console.log("invlide")
// }
// else {
//     console.log("age is less than 18")
// }

 //! looping
 //! For Loop
// let i;
// for(i=0 ; i<100; i++){
//     console.log(i);
// }
//! for ---- in loop
// let person ={
//     name:"rao",
//     age: 20,
//     city:"Delhi"
// };
// for (let key in person) {
//     console.log(key,person[key]);
// }
//!for ----of loop
// let number =[10,20,30];
// for(let num of number ){
//     console.log(num);
// }
               //!While loop
//     let i=1;
//     while (i<=10){
//         console.log(i);
//         i++;
// }

           //! Do while loop
     
        //    let i= 10;
        //    do{
        //     console.log(i);
        //     i++;
        //    }
        //     while(i<5);






           //!Switch statement
        //    let day=3;
        //    switch (day){
        //     case 1:
        //     console.log("Monday");
        //     break;
        //     case 2:
        //     console.log("tuesday");
        //     break;
        //     case 3:
        //     console.log("wednday");
        //     break;
        //     case 4:
        //     console.log("thuresday");
        //     break;
        //     default:
        //     console.log("invalid day");
        //    }
    
         // //!function
         // function greet(name){
         //    console.log("Hello world",name);
         // }
         // greet('sushil')
         // greet('rao')
       


         //  //!function with return value
         //    function add(a,b){
         //       return a+b;

         //    }
         //    let result=add(10,20);
         //    console.log(result);




         //    const multiplay =function(a,b){
         //       return a*b;

         //    };
         //     console.log(multiplay(4,5));


          //!arrow function
          const greet = (name)=>{
            console.log("helllo",name)
          };
          greet("sushil");