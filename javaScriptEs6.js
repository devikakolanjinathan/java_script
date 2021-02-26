// The let keyword allows you to declare a variable with block scope.
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10
//Constants are similar to let variables, except that the value cannot be changed.
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
//Arrow functions allows a short syntax for writing function expressions.
const a = (x, y) => x * y;
console.log(a(5, 5));//Don't need the function keyword, the return keyword, and the curly brackets.
//Arrow functions do not have their own this. They are not well suited for defining object methods.
//Arrow functions are not hoisted. They must be defined before they are used.
// for of/loop is used iterated the array and object
var cars = ["BMW", "Volvo", "Mini"];
var y;

for (y of cars) {
  console.log(y+" ");
}
class Car {//javascript class also introduced in Es6 2015 create class name and it has constrctor
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  myCar = new Car("Ford", 2014);
  console.log(myCar.name);
  // Es6  is introduced the promise concept
  let usPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Have a nice day"); }, 3000);
  });
  
  usPromise.then(function(value) {
    console.log(value);
  });
  //Symbol() create unique identifier  
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  let id = Symbol('id');
  person.id = 140353;
  
console.log(person.id);
//Default parameter value
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    console.log(x + y);
  }
  myFunction(5); // will return 15
  // fnction rest parameter
  function sum(...args) {//function contain n number of parameter it consider as array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x1 = sum(4, 9, 16, 25, 29, 100, 66, 77);
  
  console.log(x1);
  
  //Array.find() it is used to find the first element of array is statisified the condition or not
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
var index=numbers.findIndex(myFunction);//it is used find index of first array statisifed element
console.log(first);
console.log(index);
function myFunction(value, index, array) {
  return value > 18;
}   
Number.isInteger(10);        // returns true
Number.isInteger(10.5);  // return false
Number.isSafeInteger(10);    // returns true
Number.isSafeInteger(12345678901234567890);  // returns false
