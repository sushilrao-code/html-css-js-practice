function greet(name,callback){
    console.log("hello"+name)
    callback();
}
function sayBye(){
    console.log("Bye bye");   
}
greet("Rao",sayBye)
// console.log(a);
// let a=10;
// let user={
//     "name":"Rao",
//     "age":20 
// };
// let obj =JSON.stringify(user);

// console.log(obj);

let userObj={
    name:"Rao",
    age:20 
};
let jsonStr=JSON.stringify(userObj);
console.log(jsonStr);

let  newObj=JSON.parse(jsonStr);
console.log(newObj);


fetch("https://api.postalpincode.in/pincode/301028")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });
