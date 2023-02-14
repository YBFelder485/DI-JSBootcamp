// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

function compareToTen(num){
    return new Promise((resolve, reject) => {
        if (num < 10){
            resolve("Number is smaller than 10. All good.")
        } else {
            reject("Number is too high, try again.")
        }
    })
}
compareToTen(5)
    .then(res => console.log(res));
    .catch(err => console.error(err));