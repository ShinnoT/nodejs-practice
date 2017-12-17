console.log("starting app.js");

// load a built in module (library)
const fs = require("fs");
const os = require("os");
// now you can use the fs (file system library)
// which is stored in the variable fs

const _ = require('lodash');
const yargs = require('yargs');

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
// let res = notes.addNote();
// console.log(res);

// let sum = notes.add(5, 3);
// console.log('Result: ', sum);

// console.log(_.isString(true));
// console.log(_.isString('hello'));

// let unfilterdArray = ['shinno', 1, 'shinno', 1, 2, 3];
// let filteredArray = _.uniq(unfilterdArray);
// console.log(filteredArray);

//------------------------

// console.log(process.argv);
// will output all the commands run on terminal
// for example if I type node app.js list on terminal
// it will output
// [ '/usr/bin/node',
//   '/home/shinnot/code/ShinnoT/nodejs-practice/second-app/app.js',
//   'list' ]

let title = {
  describe: 'title of note',
  demand: true,
  alias: 't'
};

let body = {
  describe: 'body of note',
  demand: true,
  alias: 'b'
};

// so to access some user input, say list, then we can access in dex of element in the array
const argv = yargs
  .command('add', 'add a new note', {
    title: title,
    body: body
  })
  .command('list', 'list all recorded notes')
  .command('remove', 'remove specified note', {
    title: title
  })
  .command('read', 'display content of specified note', {
    title: title
  })
  .help()
  .argv;
  // command function in the case above lets you specify descriptions for different commands
  // for example: description of the command and of course options in strings
  // but also the demand key of title and body options objects if set to true, means is a required option
  // alias gives shortcuts to the option so instead of --title u can run -t
// let command = process.argv[2];
let command = argv._[0];
console.log(`command type: ${command}`);
// console.log('process: ', process.argv);
console.log('yargs: ', argv)

if (command === 'add') {
  console.log('adding note');
  // if we wanted to actually add note when user inputs add --title "blah blah"
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  console.log('listing notes');
  let allNotes = notes.getAll();
  debugger;
  if (allNotes.length === 0) {
    console.log("no notes found");
  } else {
    allNotes.forEach((note) => {
      console.log(`title: ${note.title}, body: ${note.body}`);
    });
  }
} else if (command === 'remove') {
  console.log('removing note');
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'note removed' : 'note NOT found';
  console.log(message);
} else if (command === 'read') {
  console.log('reading note');
  notes.getNote(argv.title);
} else {
  console.log('command not recognized');
}

//however if you want to pass more argments
// for example node app.js remove --title="shinno" or something
// then it gets complex cuz you have to access so many things via the index in the array
// THAT IS WHY WE CAN USE THIRD PARTY MODULES TO MAKE LIFE EASIER
// it will divide it up into key value pair in hashes so that we can access them through name


//called yargs
