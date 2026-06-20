const car = {
    name: "BMW",
    model: "X5",
    year: 2020,
    start: function () {
        console.log("Car started");
    }
}
// car.start();
// for(let key in car){
//     console.log(key + ": " + car[key]);
// }

// //!Object Destructuring
// const {name, model, year}=car;
// console.log(name);
// console.log(model);
// console.log(year);

//!Object Spread Operator
const car2 = { ...car, age: 19, color: "Black" };
console.log(car2);

//!Object Freeze
Object.freeze(car2);
car2.color = "White";
console.log("Frozen", car2.color);

//!Object Seal
Object.seal(car2);
car2.year = 2021;
console.log("Seal", car2.year);



delete car2.model;
console.log("After deletion:", car2.model);


//!Object Assign
const car3 = Object.assign({}, car2);
console.log(car3);


//!Object From Entries
const entries = [["name", "BMW"], ["model", "X5"], ["year", 2020]];
const car4 = Object.fromEntries(entries);
console.log(car4);

//!Object HasOwnProperty
console.log(car4.hasOwnProperty("name"));
console.log(car4.hasOwnProperty("color"));

//!Object Is
console.log(Object.is(car4, car3));
console.log(Object.is(car4, car4));

//!Object Define Property
Object.defineProperty(car4, "color", {
    value: "Black",

    writable: true,
    enumerable: true,
    configurable: true
});
console.log(car4);

//!Object Default Values
const car5 = {
    name: "BMW",
    model: "X5",
    year: 2020
};
const { age = 18 } = car5;
console.log(age);

//!Object Prototype
function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

//!Revame While Destructuring
const { name: carName, model: carModel, year: carYear } = car5;
console.log(carName);
console.log(carModel);
console.log(carYear);