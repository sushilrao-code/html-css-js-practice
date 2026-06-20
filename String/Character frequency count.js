//Character frequency count Karo
let str="sushil"
let freq ={};
for (let ch of str ) {
if(freq[ch]){
  freq[ch]++;
}
else{
  freq[ch]=1
}
 
}
console.log(freq)