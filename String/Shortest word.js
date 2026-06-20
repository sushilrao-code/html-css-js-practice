//Shortest word find
let str="I love programming"
let currentWord=""
let shortestWord=""
for(i=0 ; i<str.length; i++){
  if(str[i]!==" "){
    currentWord +=str[i]
  }else{
    if(shortestWord ==="" ||
      currentWord.length<shortestWord.length){
     shortestWord=currentWord
    }
  currentWord=" ";
  }
   if(shortestWord ==="" ||
    currentWord.length<shortestWord){
      shortestWord=currentWord
    }
}
console.log(shortestWord)