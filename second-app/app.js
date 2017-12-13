console.log("starting app.js");

// load a built in module (library)
const fs = require("fs");
const os = require("os");
// now you can use the fs (file system library)
// which is stored in the variable fs

// requiring a local file that you made instead of a library:
const notes = require('./notes.js');

// fs.appendFile('greetings.txt', 'Hello World!');
// this is the classic way which will give an error


// ------------------------
// using userInfo from os module
// let user = os.userInfo();
//userInfo doesnt need any arguments, they are optional
// if you log this, it should be a hash, dictionary like a JSON file
// { uid: someNumber,
  // gid: someNumber,
  // username: 'whatever',
  // homedir: '/blah/blah',
  // shell: '/blah/blah' }



// so you can do either:
// fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function (err) {
// for string interpolation use:
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!`, function (err) {
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


//now when you run it it should add
//Hello shinnot!



// -----------------------
let res = notes.addNote();
console.log(res);

