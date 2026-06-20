
//String reversed and Palindrom
let str="madam"
let count=""
for (let i = 0; i < str.length; i++) {
  count=str[i]+count
}
if(count==str){
  console.log("Palindrom")
}
else{
  console.log("Not Palindrom")
}
