//Vowels Count Karo
let str="sushil"
let Vowels="aeiouAEIOU"
count=0
for (let ch of str ) {
  // if(ch==="a" || ch==="e" || ch==="i" ||  ch==="o" ||  ch==="u" ||  ch==="A" ||  ch==="E" || ch==="I" || ch==="O" || ch==="U"   )
 if(Vowels.includes(ch))
  count++
  
}
console.log(count)
