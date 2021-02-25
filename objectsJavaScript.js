//objects are variable too and variables contain single value but objects contain many values name value syntax
var Student={Name:"anu",Id:123,Dept:"EEE",sec:"A"}
console.log(Student.Name+" "+Student.Id+" "+Student.Dept+" "+Student.sec);//this obj name.name is used to get values
delete Student.sec;// sec wold deleted and return undefined 
console.log(Student.Name+" "+Student.Id+" "+Student.Dept+" "+Student.sec);
Student.name = function() {//this is adding a function into objects
    return this.Name + " " + this.Dept;
  };
  console.log(Student.name());
 person = new Object();// this object created using new keyword
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 
console.log(person.firstName + " is " + person.age + " years old.");//this one type to access the property of object
console.log(person["firstName"] + " is " + person["age"] + " years old.");//this anothertype to access the property of object
person.nationality = "English";// adding a element to the objects
console.log(person.firstName + " is " + person.nationality + ".");
var person1 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
var x = person1;//other variable contain object.here person1 and x are same object
x.age = 10;//the value age is changed into another value
console.log(x.age);
var person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person2.fullName());// it returns johnDoe
  //console.log(person2.fullName);//it  returns function() { return this.firstName + " " + this.lastName; }
  var employees={Name:"charu",Dept:"IT",Id:1234}
  //console.log(employees);// returns object only
  var arrObj=Object.values(employees);// this is used to display the object by object.values()
  //console.log(arrObj);//
var person4 = {name:"chan", age:30, city:"New York"};
var myArray = Object.values(person4);
console.log(myArray);
var person5 = {name:"shin", age:5, city:"china"};

var myString = JSON.stringify(person5);// display using the Stringify
console.log(myString);
var person6 = {name:"julie", age:function () {return 8;}};
person6.age = person6.age.toString();//function cannot directly to stringfiy so function into string

var myString1 = JSON.stringify(person6);
console.log(myString1);
var person7 = {
    firstName: "Dev",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }
  }
  console.log(person7.lang);
  var person8 = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    set lang(lang) {
      return this.language=lang;
    }
}
    person8.lang="Tamil";
  
  console.log(person8.language);
  function Person9(firstName, lastName, age, eyeColor) {//constructor in object
    this.firstName = firstName; // this keyword is denoted to loacl variable ising this constructor
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
  }
  var myMother = new Person9("Sally","Rally",48,"green");
  myMother.changeName("Doe");
  console.log(myMother.lastName);//here last name is chande

  

