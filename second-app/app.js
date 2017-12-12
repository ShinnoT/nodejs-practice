console.log("starting app");

// load a built in module (library)
const fs = require("fs");
// now you can use the fs (file system library)
// which is stored in the variable fs

// fs.appendFile('greetings.txt', 'Hello World!');
// this is the classic way which will give an error

// so you can do either:
fs.appendFile('greetings.txt', 'Hello World!', function (err) {
  if (err) {
    console.log('Unable to write to file');
  }
});

// or a more new way of doing it
// fs.appendFileSync('greetings.txt', 'Hello World!');
