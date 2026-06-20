const student={
    name:"Rao",
    age:12,
    course:"BTech"
};
console.log(student)
console.log(student.name)
console.log(student["age"])


//!Update
student.age=13;
student["course"]="MTech"
student.city="Hyderabad"
console.log(student)

//!Delete
delete student.age;
console.log(student)

//!Nested Object
const employee={
    name:"Rao",
    age:12,
    address:{
        street:"123 Main St",
        city:"Hyderabad",
        state:"TS"
    }
};
console.log(employee);
console.log(employee.address.city);

//!Object Methods
const person={
    name:"Rao",
    age:12,
    greet:function(){
        console.log("Hello, my name is " + this.name);
    }
};
person.greet();

const person2={
    name:"Rao",
    age:12,
};
console.log(Object.keys(person2)) //!Returns an array of keys
console.log(Object.values(person2)) //!Returns an array of values
console.log(Object.entries(person2)) //!Returns an array of key-value pairs