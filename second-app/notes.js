console.log('starting notes.js');

console.log(module);
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


//------------------------------
//redefining addNote:
let addNote = (title, body) => {
  console.log('adding note: ', title, body);
};

// but definind a function alone is not useful cuz we're not exporting it to use it in app.js
// so we export it with module.exports
module.exports = {
  // addNote: addNote
  //however in ES6 you can just do a shortcut by typing
  addNote
}
