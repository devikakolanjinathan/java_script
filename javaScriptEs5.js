//ES5 major revision of JavaScript

"use strict";// strict mode  helpsto write cleaner code, like preventing  from using undeclared variables.
//x=5;
//console.log(x);// it return not defined
// Strim() is used to remove white space
var str="   nature is beautiful   " ;
console.log(str.trim());
function myFunction() {// this function return given object is array or not.
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var x=Array.isArray(fruits)
    console.log(x);
}
myFunction();
//Array.forEach() is method call print elements in given array for call each time
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);// here this method for print each element

function myFunction(value) {
  txt = txt + value + " ";
}
console.log(txt);
// Array.map() it is used to create a new array by performing a function of each element
var num1=[10,20,30,40,50];

var num2=num1.map(usfunction);

function usfunction(elements,pos,array){
    return elements/5;
}
for( var x in num2){
    console.log(num2[x]);
}
//Array filter is used to check a particular condition in an given array element
var arr=[45,98,76,50,11,14,17,18]
var above20=arr.filter(myshow);
console.log(above20);// it return 45, 98, 76, 50
function myshow(value,pos,array){
    return value > 20;
} 
// Array reduce is used to find sum of all elements present in array
// reduce() is used to reduce array element into single elemenet
// reduceRight() is used to reduce element from right to left 
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction, 100);//final value add into another parameter

console.log("The sum is " + sum);

function myFunction(total, value) {// total is intial value and already return value
  return total + value;
}
//every is used to check given condition check all element statisified the given condition
var numbers2 = [45, 4, 9, 16, 25];
var allOver18 = numbers2.every(myFunction);

console.log("All over 18 is " + allOver18);

function myFunction(value, index, array) {
  return value > 18;
}
// JASON.parse() it is used to text into js object
'{"name":"John", "age":30, "city":"New York"}'
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj.name);
//JSON stringify
var obj = {name:"John", age:30, city:"New York"};
var myJSON = JSON.stringify(obj);
console.log(myJSON);
var c=Date.now();//Date.now() returns the same as getTime() performed on a Date object.
console.log(c);
// setter and getter method object
var person1 = {
    firstName: "John",
    lastName : "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
    set fullName(value){
         return this.lastName=value;
    }
  };
  person1.lastName="chan";
  
  // Display data from the object using a getter:
  console.log(person1.fullName);