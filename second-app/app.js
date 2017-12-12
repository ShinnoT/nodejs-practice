console.log("starting app");

// load a built in module (library)
const fs = require("fs");
const os = require("os");
// now you can use the fs (file system library)
// which is stored in the variable fs

// fs.appendFile('greetings.txt', 'Hello World!');
// this is the classic way which will give an error

// so you can do either:
// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });

// or a more new way of doing it
// fs.appendFileSync('greetings.txt', 'Hello World!');


// when you run the app you can see the the greetings.txt file
// has been created in the same directory of the app
// if the file doesnt exit it makes it
// if you run the app again, it will add Hello World! again


// ------------------------
// using userInfo from os module
let user = os.userInfo();
//userInfo doesnt need any arguments, they are optional
console.log(user);
