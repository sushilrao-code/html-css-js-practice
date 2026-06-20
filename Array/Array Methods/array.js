let a1 = [1, 2, 3, 5];
//Push
a1.push(10);
a1[a1.length] = 7; //Manual push
console.log(a1);

//Pop end se remove
a1.pop();
console.log(a1);

//Shift Starting ma Remove
a1.shift();
console.log(a1);

//Unshift Starting ma add
a1.unshift(9);
console.log(a1);

//include for check element
console.log(a1.includes(9));

//element of Index
console.log(a1.indexOf(5));

//To String Array
let num = [1, 2, 3, 4, 5];
num.join(" ");
console.log(num);
console.log(num.toString());
console.log(String(num));

//Array specific element delete Splice
num.splice(2, 1);
console.log(num);

//Array Ma elementInsert karo
arr.splice(2, 0, 30);
console.log(arr);

//Array Ek Portion opy karo Slice
let arr1 = [1, 2, 3, 4, 5];
let arr2 = arr1.slice(1, 4);
console.log(arr2);
