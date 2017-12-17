// let square = (x) => {
//   return x * x;
// };

//arrow functions allow you to simplify it if its one line
//you dont even need to implicitly write return

// let square = (x) => x * x;

// you also dont even need to prove paranthases if its just one argument

let square = x => x * x;
console.log(square(9));


let user = {
  name: 'shinno',
  sayHi: () => {
    console.log('hi');
  }
};

user.sayHi();


//however this statement does not work in arrow functions
let user2 = {
  name: 'aimi',
  sayHi: () => {
    console.log(`hi. my name is ${this.name}`);
  },
  sayHiThatWorks () {
    console.log(arguments);
    console.log(`hi. my name is ${this.name}`);
  }
};

user2.sayHi();
// this outputs --> 'hi. my name is undefined'

user2.sayHiThatWorks();
// this will work because it is the ES6 way
// for object functions you dont need colon nor the thick arrow
// when you log arguments it will display what arguments were passed
// this will not work in arrow functions

//in conclusion, arrow functions are not so great for object functions because you usually need to use this or arguments
