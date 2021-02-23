
function productNumber(n1,n2){//function create with function function name
return n1*n2;//two variables passes values
}
var n3=productNumber(23,2);//function is call
console.log(n3);
//function is used for code useablity
function studentDetails(id,name,dept){
    console.log(name);
    console.log(id);
    console.log(dept);
}
function staffDetails(sid,sname,sdept){
    console.log(sname);
    console.log(sid);
    console.log(sdept);
}
function collegeDetails(){
    var s=studentDetails(13,"jai","EEE");
    var s1=staffDetails(45,"sai","EEE");
}
 collegeDetails();
 //above program two function created and called another function
 function revDivided(v1,v2){
     //return v1/v2;
     console.log(v1/v2);
 }
 function revModulo(v3,v4){
     //return v3%v4;
     console.log(v3%v4);
 }
 function DivModlo(p1){
     var z;
     var x=revDivided(p1,10);
     var y=revModulo(p1,10)
    
 }
 DivModlo(123);
 


