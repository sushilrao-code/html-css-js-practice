console.log("This is Promise");

let promise = new Promise((resolve, reject) => {
setTimeout(() => {
console.log("Yes done");
resolve("kaam ho gaya");
}, 2000);
});

promise.then((result) => {
console.log("result");
});
fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
        users.forEach((user) => {
            console.log(user.name);
        });
    });
