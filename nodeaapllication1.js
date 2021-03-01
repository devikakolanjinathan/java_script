var http=require("http");// this create required module created 
const { request } = require("https");
http.createServer(function(request,response){// create sever
    response.writeHead(200,{'Content-Type': 'text/plain'});
    var obj={
        "name":"John",
        "age":30,
        "cars":[ "Ford", "BMW", "Fiat" ]
    }
    
    for(i in obj){
    var myJsonString = JSON.stringify(obj.name);
   
    response.end(myJsonString);// this function print the above obj and this converted into json object
    }
    
}).listen(8080);// port insert
console.log('Server running at http://127.0.0.1:8080/');
var http=require("http");
//const{request}=require("http");
http.createServer(function(requ,respon){
    respon.writeHead(200,{'content-Type':'text/plain'});
    var j="hello world";// the string print inside the link
    respon.end(j);

}).listen(8081);
console.log('server running at http://127.0.0.1:8081/');
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'});
    var person = {name:"John", age:30, city: "New York"};
    var j=JSON.stringify(person);
    res.end(j);
}).listen(8082);
console.log('running success at http://127.0.0.1:8082/');// this object is print inside the link