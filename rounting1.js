//rounting with frame work 
const express=require("express");// use yhe express module 
const app=express();// create an object of the object
var bodyParser=require('body-parser');// body-parser is a piece of express middleware that reads a form'sinput and stores it as a javascript object accessible 
app.use(bodyParser.json());//bodyParser. json returns middleware that only parses json.
app.use(express.urlencoded({extended:false}));//middleware for parsing bodies from URL
app.use(express.json());
const list=[{name:'priya',mail:"priya@123",id:"54267",dep:"IT"},
{name:"simo",mail:"simo@123",id:"65876",dep:"Cse"},
{name:"siwa",mail:"siwa@123,id:57578",dep:"EEE"}];
const a=[1,3,4,5,6,7,8];
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
    }  
     e=new emp(103,"Vimala",30000);
    app.get('/',function(req,res){// create get method at port 3028
        res.status(200).send(list);
    })
    app.get('/emp',function(req,res){// this getmethod at localhost:3028/emp
        res.status(200).send(e);
    })
    app.get('/a',function(req,res){//this getmethod at localhost:3028/a
         res.status(200).send(a);
    })
    app.post('/',function(req,res){// this post is used to create a new post at localhost:3028/
        const posts=req.body//this is used req the body
        list.push(posts);
        res.status(200).send("posting")
    })
    app.post('/a',function(req,res){
        const pos=req.body
        a.push(pos);
        res.status(200).send('second posting')
    })
    app.put('/',function(req,res){// this put is used to update the existing  
        const puts=req.body
        list.push(puts);
        res.status(200).send("putting")
    })
    app.delete('/a',function(req,res){// this delete is used to delete specific value/parameter in existing data
        a.splice(1,1);
            
        
        res.status(200).send("deleting")
    })
    app.listen(3028,()=>{
        console.log("server is running at 3028");
    })

    