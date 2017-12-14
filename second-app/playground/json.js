// let obj = {
//   name: "shinno"
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// //will return string
// console.log(stringObj);
// //will return {"name":"shinno"}


let personString = '{"name": "shinno","age": 25}';
let person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

// so you use stringify to WRITE something to a JSON file
// and you use parse to READ something from a JSON file by converting it to an object
