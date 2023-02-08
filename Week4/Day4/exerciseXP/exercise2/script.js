function displayStudentInfo(objUser){
    const { first, last } = objUser
    return `Your full name is ${first} ${last}`
}

const sentence = displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(sentence);

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'