// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise = Promise.resolve(3);
const promise2 = Promise.reject("Boo");

promise.then((res) => console.log(res)).catch((err) => console.log(err));
promise2.then((res) => console.log(res)).catch((err) => console.log(err));