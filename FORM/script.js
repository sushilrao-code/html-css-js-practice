const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name");
const Middel_Name = document.getElementById("Middel Name");
const Last_Name = document.getElementById("Last Name");
const Mother_Name = document.getElementById("Mother Name");
const age = document.getElementById("age");
const email = document.getElementById("email");
const Father_Name = document.getElementById("Father Name");
const phone = document.getElementById("Phone Number");
const Date = document.getElementById("D.O.B");
const Roll_Number = document.getElementById("Roll Number");
const Class = document.getElementById("Class");
const Gender = document.getElementById("Gender");
const Address = document.getElementById("address");
const City = document.getElementById("City");
const State = document.getElementById("State");
const pin_code = document.getElementById("pincode");
const Country = document.getElementById("Country");


console.log(name.value);
console.log(Middel_Name.value);
console.log(Last_Name.value);
console.log(Mother_Name.value);
console.log(age.value);
console.log(email.value);   
console.log(Father_Name.value);
console.log(phone.value);
console.log(Date.value);
console.log(Roll_Number.value);
console.log(Class.value);
console.log(Gender.value);
console.log(Address.value);
console.log(City.value);   
console.log(State.value);
console.log(pin_code.value);
console.log(Country.value);
 
    window.location.href = "ty.html";
});

