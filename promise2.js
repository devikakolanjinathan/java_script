
//promise chain concept 
let fetchdata=function(data){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log("Fetching a data");
          resolve({id:2,message:"nice work"});// passing the data
      },2000);// after 2 sec it prints output
    
    });
}
let parsedata=function(data){// create another function by using another promise object
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let paresdataout="pared data for"+" "+data.id+" "+"with message "+data.message;
        resolve({paresd:paresdataout});// this resolve contain paresdata
      },2000);
    });
};
let echodata=function(data){// this function is used to print the data previous datas
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data.paresd);
        },2000)
    })
}
fetchdata().then(parsedata).then(echodata);// this return the all functions
// another example for chain promise
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
  
    console.log(result);// it return value is 1
    return result * 2;
  
  }).then(function(result) { 
  
    console.log(result);// it return 2
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  });