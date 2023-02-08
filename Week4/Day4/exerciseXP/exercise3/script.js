// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

const users = { user1: 18273, user2: 92833, user3: 90315 };

const entries = Object.entries(users);
console.log(entries);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const values = Object.values(users);
const keys = Object.keys(users);
const result = [];
values.forEach((id, index) => {
    result.push([keys[index], id * 2]);
});
console.log(result);