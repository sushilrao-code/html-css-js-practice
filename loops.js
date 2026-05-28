let a=1;
for(let i=0;i<10;i++){
    a+=i;
    console.log(a);
}
let obj={
    name:"test",
    age:20,
    city:"New York"
}
for(const key in obj){
    console.log(key,obj[key]);
}
for(const c of "hello"){
    console.log(c);
}
let i=0;
while(i<6){
    i++;
    console.log(i);
}
   let j=0;
do{
    j++;
    console.log(j);
}while(j<10);