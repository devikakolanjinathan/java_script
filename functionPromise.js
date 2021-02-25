function myShow(data){//main function for print
    console.log(data);
}
let myPromise=new Promise(function(myResolve,myReject){// it has medhod and two parameter this is called producing code
    let classroom=1;
    if(classroom==1){
        myResolve("cleaned");// resolved for sucess the condition
    }
    else{
        myReject("not cleaned");//reject for error occur or failed condition
    }


});
myPromise.then(//consuming code and wait for promises fulfilled
    function(value){myShow(value);},
    function(Error){myShow(Error);}
);
setTimeout(function() { usFunction("Good Luck"); }, 3000);//this function called back the value is printed after 3 sec

function usFunction(value) {
  console.log(value);
}//promise function used for setTimeout
let usPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Have a nice day"); }, 3000);
  });
  
  usPromise.then(function(value) {
    console.log(value);
  });
  
  //async makes a function return a Promise
  //await makes a function wait for a Promise
  function dataPrint(data1){
      console.log(data1);
  }
  async function print(){// act as promise function here asyn is keyword
      return "hello world";
  }
  print().then(
      function(value){dataPrint(value);},//return hello world
      function(Error){dataPrint(Error);}
  );
  async function myDisplay1() {
    let myPromise1 = new Promise(function(myResolve, myReject) {
      myResolve("All the best");
    });
     console.log(await myPromise1);// await keyword is used before promise object
  }
  
  myDisplay1();
  //asyn function is used here time out
  async function myDisplay2() {
    let myPromise2 = new Promise(function(myResolve, myReject) {
      setTimeout(function() { myResolve("how are you"); }, 2000);
    });
    console.log(await myPromise2);
  }
  
  myDisplay2(); 