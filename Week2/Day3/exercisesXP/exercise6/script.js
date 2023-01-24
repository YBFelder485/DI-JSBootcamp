const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

//   Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

let sentence = ""
for (const key in details){
    sentence = sentence + " " + key + " " + details[key]
}
console.log(sentence)