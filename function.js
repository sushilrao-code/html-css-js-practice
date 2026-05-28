function nice(name) {
    console.log("hello"+name + "nice!");
    console.log("Hey"+name + "good!");
    console.log("hi"+name + "!");
}


nice("world");
nice("JavaScript");
nice("ES6");

function add(a, b) {
    // console.log(a + b);
    return a + b;
}

result =add(1, 2);
add(3, 4);
add(5, 6);  
console.log("the add of these number is",result);

const func1= (x) => {
    console.log("this is a function", x);
}
func1(10);
func1(20);