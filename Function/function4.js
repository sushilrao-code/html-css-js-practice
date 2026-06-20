const sqr=(x)=>x*x;
const cube=(x)=>x*x*x;
const pow=(x,y)=>Math.pow(x,y);

sqr(2);
cube(2);
pow(2,3);
console.log(sqr(2));
console.log(cube(2));
console.log(pow(2,3));

const evenorodd=(x)=>(x%2==0)?"even":"odd";
console.log(evenorodd(2));
console.log(evenorodd(3));

const max=(a,b)=>(a>b)?a:b;
console.log(max(2,3));
console.log(max(5,4));

const greet=(name="sushil")=>`Hello, ${name}!`;
console.log(greet("Alice"));
console.log(greet("Bob"));
console.log(greet());