// Create a promise that resolves itself in 4 seconds and returns a “success” string.

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => resolve("success"), 4000);
});

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

const promise = Promise.resolve(setTimeout(() => {
    
    console.log("success")}, 4000));
    
// Add code to catch errors and console.log ‘Ooops something went wrong’.
    promise.then(console.log).catch(console.error("Oops something went wrong", err));
    
