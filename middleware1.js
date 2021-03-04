const express=require("express");
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
var update=function(req,res,next){// middle are function between the req and res
    var user="kaniga";
    console.log(user);
    //res.send("created")
}
app.use(update);
app.post('/a',function(req,res){
    var c=req.body;
    user.concat(c);
    res.send("updated");
});

function lowprice(req,res,next){// this consider as the middleware function 
    req.customproperty=100;
    next();
}
function highprice(req,res,next){
    
    console.log("the customproperty"+(req.customproperty));
    req.customproperty=600;
    next();
}
function errorhandler(err,req,res,next){
    res.json({err:err});// this middleware is used for handle the error
}
app.use(lowprice);
app.use(highprice);
app.get('/',(req,res) =>{// this get method is used to route customproperty it get from the middleware function
    res.send("<h>the value is:"+(req.customproperty));
});
app.use(errorhandler);

var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)


app.get('/date', function (req, res) {// this middleware for the for printing the date
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})
var add=function(req,res,next){
    req.adding=808+346;
    next()
}
app.use(add);
app.get('/math',function(req,res){
    var text=" ";
    text=text+req.adding;
    res.send(text);
})

app.listen(4039,()=>{
    console.log("sever running");
});