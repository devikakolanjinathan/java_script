/*var text1='{"livingthings":[' +
'{"spicesName":"Vertebrates","Name":"Human"},' +
'{"spicesName":"Invertebrates","Name":"Butterfly"},' +
'{"spicesName":"Plants","Name":"Neem"}]}';
var obj1=JSON.parse(text1);
for(var x in text1){
    console.log(obj1.livingthings[x].spicesName+" "+obj1.livingthings[x].Name);
}*/

var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
for(i in text){
    var p=obj.employees[i].firstName + " " + obj.employees[i].lastName;
    console.log(p);
}
//nested array in JASON
var x="";
var y="";
var myObj = {
    "name":"John",
    "age":30,
    "cars": [//car array contain objects
      { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },//model name contain array
      { "name":"BMW", "models":[ "320", "X3", "X5" ] },
      { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
   }
   for (i in myObj.cars) {
    x += myObj.cars[i].name  ;// i for loop for car array printing
    
    for (j in myObj.cars[i].models) {
      y +=myObj.cars[i].models[j];//j for loop for models array printing
      //console.log(y);
    }
    //console.log(x);
    
  }
  console.log(x);
  console.log(y);
var text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj1 = JSON.parse(text2, function (key, value) {//inthis object date object don't support so we have convert into js object 
  if (key == "birth") {
    return new Date(value);// revier fnction
  } else {
    return value;
  }
})
console.log(obj1.name + ", " + obj1.birth); 
var myObj1, i, x = "";
myObj2 = {
  "name":"John",
  "age":30,
  "cars":[ "Ford", "BMW", "Fiat" ]
};
myObj2.cars[1] = "Mercedes";//here modify the array value

for (i in myObj.cars) {
  x += myObj2.cars[i] ;

console.log(x);
}



