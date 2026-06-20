//Longest word find
let str="I love programming"
let currentWord=""
let longestWord=""
count=0
for(i=0 ; i<str.length; i++){
  if(str[i]!==" "){
    currentWord +=str[i]
  }else{
    if(currentWord.length>longestWord.length){
      longestWord=currentWord
    }
  currentWord=" ";
  }
   if(currentWord.length>longestWord.length){
      longestWord=currentWord
    }
}
console.log(longestWord)