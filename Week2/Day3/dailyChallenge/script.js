// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

const reps = 6

let stars = ""
for (let i = 0;i < reps;i++) {
    stars = stars + "*"
    console.log(stars)
}