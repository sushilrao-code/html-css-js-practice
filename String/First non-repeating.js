//Fist non-repeating find
let str="sushil"
freq={}
for(let ch of str){
  freq[ch]=(freq[ch] ||0)+1
  
}
for(let ch of str){
  if(freq[ch]===1){
    console.log(ch);
    break
  }
}