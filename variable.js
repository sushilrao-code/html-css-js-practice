console.log("Hello, World!");
var a=5;
a=a+1;
var b=6;
var c=a+b;
var d="5";
let a=9;
console.log(c);
console.log(typeof a,typeof b,typeof d);
{
    let a=10;
    console.log(a);
}
console.log(a);


const a1 =6;
// a1=7;  not allowed because a1 is constant

let x="sushil"
let y= 22;
let z= 5.6;
const p=true;
let r=null;
let q=undefined;
let s=Symbol("I am a symbol");
console.log(x,y,z,p,r,q,s);
console.log(typeof x,typeof y,typeof z,typeof p,typeof r,typeof q,typeof s);


let o={
    "name":"sushil",
    "job role":"developer",//""for space in key job role
    age:22
}
console.log(o);
console.log(o.name);
console.log(o["job role"]);
o.age=23;//updating age
console.log(o.age);
o.city="pune";//adding new key value pair
console.log(o);