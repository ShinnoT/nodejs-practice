// let obj = {
//   name: "shinno"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// //will return string
// console.log(stringObj);
// //will return {"name":"shinno"}


// let personString = '{"name": "shinno","age": 25}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// so you use stringify to WRITE something to a JSON file
// and you use parse to READ something from a JSON file by converting it to an object

const fs = require('fs');

let originalNote = {
  title: 'some title',
  body: 'some body'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
