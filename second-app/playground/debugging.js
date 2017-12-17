let person = {
  name: 'Brad'
};

person.age = 25;

debugger;
// when you include this statement in your code
// it will allow you to skip to these points with c

person.name = 'Mike';

console.log(person);


// to debug begin by typing, on terminal:
// node inspect filename.js

// then you can do things like:
// list(10) which lists 10 lines of code
// n which stands for next goes through each line of code
    // - note here that the line debugger is on is not executed yet
// c which runs the rest of the code from where you are

// repl <-- 're-evaluate print loop' (similar to console on developer tools)
// this command will allow you to mess with your code from inside terminal
// to check if things are going the way they should
// not that if you change something, like reassign a value to a variable
// in debugger it will change (not in real life code tho so if you exit debugger itll be back to normal)


//note that you can use nodemon inspect blah

// when testing a new feature gotta do node inspect app.js read --title="note 1"



//HOWEVER you can debug not just with old boring terminal
//you can type node --inspect-brk filename.js
//then open chrome and type chrome://inspect
//then click open dedicated dev tools for node
//then a more fancy GUI for debugging will show up

//esc to show/hide console

//also can use nodemon --inspect-brk filename.js




// ---------------------- dev tools
// can just click on line number to add breakpoints like debugger;
