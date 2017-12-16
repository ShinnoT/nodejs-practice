console.log('starting notes.js');

// console.log(module);
// returns this object:
// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/home/shinnot/code/ShinnoT/nodejs-practice/second-app/notes.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/home/shinnot/code/ShinnoT/nodejs-practice/second-app/node_modules',
//      '/home/shinnot/code/ShinnoT/nodejs-practice/node_modules',
//      '/home/shinnot/code/ShinnoT/node_modules',
//      '/home/shinnot/code/node_modules',
//      '/home/shinnot/node_modules',
//      '/home/node_modules',
//      '/node_modules' ] }

// the only useful thing in module usually is the exports attribute
// because we can do thins like

// module.exports.age = 25;
// // this will now be accessed in app.js

// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New note';
// };

// module.exports.add = (a, b) => {
//   return a + b;
// };

let fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
//------------------------------
//redefining addNote:
let addNote = (title, body) => {
  // console.log('adding note: ', title, body);
  let notes = fetchNotes();
  let note = {
    // title: title, can be simplified like below
    title,
    body
  };

  //useful so that you maintain previous notes when adding new on
  // however if the JSON file doesnt exist, because its trying to read
  // from non-existing file, app.js will crash
      // let notesString = fs.readFileSync('notes-data.json');
      // notes = JSON.parse(notesString);
  // so we use try/catch
  // the code inside try will run if it doesn/t throw error
  // else fallback to catch and do something else


  // let duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  //   // returns an array duplicateNotes with duplicate notes
  // });
  // ES6 syntax
  let duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    console.log("note added!");
  } else {
    console.log("sorry you already have a note with that title");
  }

};

let getAll = () => {
  console.log('getting all notes');
};

let removeNote = (title) => {
  //fetch notes
  // filter notes, removing the one with title of argument
  //save new notes array
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

let getNote = (title) => {

};

// but definind a function alone is not useful cuz we're not exporting it to use it in app.js
// so we export it with module.exports
module.exports = {
  // addNote: addNote
  //however in ES6 you can just do a shortcut by typing
  addNote,
  getAll,
  removeNote,
  getNote
}


