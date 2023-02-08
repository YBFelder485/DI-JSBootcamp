// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch (){
        const sentence = `${this.uploader} watched all ${this.time} of ${this.title}!`;
        console.log(sentence);
    }
}

const vid1 = new Video("Harry Potter", "Steve-o", "8 hours");
const vid2 = new Video("Lord of the Rings", "Macky", "14 hours");
vid1.watch()
vid2.watch()