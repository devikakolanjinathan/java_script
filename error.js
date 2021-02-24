try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.log(err.message);
}
//hoisting 
 x=5;
var y=6;
var z=x+y;
var x;
console.log(z);
{
    a=4;
    let b=5;
    let c=a+b;
    //let a;
    //console.log(c);// it return reference error
}
{
    a=8;
    var b=6;
    var c=a+b;
    //const a;
    //console.log(c);// it return Syntax error
}
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will  cause an error because y is not declared
  //console.log(y);
}
//this used in call gobal variable in function
var person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());
function myPro() {
    console.log (this);
  }
  myPro();
  //call() is used to explicit function binding
  var person1 = {//this variable for function
    name: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {//this variable for arguments passing
    firstName:"John",
    lastName: "Doe",
  }
 console.log(person1.name.call(person2));
//Arrow function used in Es6. it is used to reduce the function syntax
hello = () => {
    return "Hello World!";
  }
  console.log(hello());
  hi = () => "Wow beautiful!";//arrow is used in short form
  console.log(hi());