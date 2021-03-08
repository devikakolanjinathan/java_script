let allGood=false;
let fetchsomedata=new Promise((resolve,reject)=>  {
if(!allGood){
    reject("error when fetching a data");

}
else{
    resolve ({
        id:1,
        message:"good work"
    })
};

})
fetchsomedata.then(fetcheddata=>{
    console.log (".then",fetcheddata)
}).catch(err=>{
    console.log("catch",err)
})
