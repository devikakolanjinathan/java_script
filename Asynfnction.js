function print(value){
    console.log(value);
}
function print1(){
    print("GoodMorning");
}
function print2(){
    print("GoodNight");
}
print1();
print2();
function myDisplayer(some) {
    console.log (some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result = myCalculator(5, 5);
  myDisplayer(result);

  // javaScript callback function
  function show(data){
      console.log(data);
  }
  function myValue(n1,n2,myCal){// function get as value in this function
      let s1=n1*n2;
      
      myCal(s1);//this function is callback as another name with parameter


  }
  myValue(6,7,show);// function is pass as 
  //Asynchronous function is often used call back function.one function is wait for another function
  setTimeout(myFunction, 3000);//here setTimeot function call other function wait for 3000millisecond

function myFunction() {
  console.log("the Sun is rise");
}
//setInterval function is used call function
setInterval(myFunction, 1000);// this function also called another function and time interval is 1sec

function myFunction() {//myFunction act as call back function
  let d = new Date();
  
  d.getHours() 
  d.getMinutes() 
  d.getSeconds()// it return hor mintes and sec increases order
        
} 
 
