//Duplicat Remove
let str="sushil"
let obj={}
let result=""
for (let ch of str ) {
  if(!obj[ch]){
    obj[ch]=true
    result+=ch;
  }
}

console.log(result)