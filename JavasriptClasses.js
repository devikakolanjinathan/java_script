//class craete javascript is classname "class key word is used" inside the class there is constructor is present
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  myCar = new Car("Ford", 2014);// this object contain class 
  console.log(myCar.name+" "+myCar.year);//return Ford 2014
  class Person{
      constructor(Name,Year)
      {
      this.Name=Name;
      this.Year=Year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.Year;
    }
}
    let myAge=new Person("priya",2000);
    console.log(myAge.Name+" age is "+myAge.age());
//class inheritance
class Cars {//class A created
    constructor(brand) {//constructor act as method
      this.carname = brand;//this denoted brand as carname
    }
    present() {
      return 'I have a ' + this.carname;// this method for return carname
    }
  }
  
  class Model extends Cars {//here class B extend from class A
    constructor(brand, mod) {
      super(brand);//super keyword is used for brand from class A
      this.model = mod;//mod as model
    }
    show() {
      return this.present() + ', it is a ' + this.model;//this method is used to print all data
    }
  }
  
  let mycars = new Model("Ford", "Mustang");
  console.log(mycars.show());
  // using get and set method in classes
  class Fruits {
    constructor(variety) {
      this.type = variety;
    }
    get fname() {//get method get the type name from constructor using this keyword
      return this.type;
    }
    set fname(x) {
      this.type = x;//set method is used to set the value
    }
  }
  
  let myFruits = new Fruits("Mango"); 
  console.log(myFruits.fname);
  //static classes
  class World{
      constructor(variable){
          this.variable=variable;
      }
      static water(){//static method is created with static keyword
          return "cool";
      }
  }
  let myWorld=new World("hot")
  console.log(World.water());//static method call by using class name not object name 