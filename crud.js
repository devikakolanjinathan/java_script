const express = require('express')
const fs = require('fs')
const app = express()
//this line is required to parse the request body
var bodyParser=require('body-parser');// body-parser is a piece of express middleware that reads a form'sinput and stores it as a javascript object accessible 
app.use(bodyParser.json());//bodyParser. json returns middleware that only parses json.
app.use(express.urlencoded({extended:false}));//middleware for parsing bodies from URL
app.use(express.json());

/* Create - POST method */
app.post('/', (req, res) => {
    //get the existing user data
    const existUsers = [];
    
    //get the new user data from post request
    const userData = req.body
    //check if the userData fields are missing
    if (userData.fullname == null || userData.age == null || userData.username == null || userData.password == null) {
        return res.status(401).send({error: true, msg: 'User data missing'})
    }
    
    //check if the username exist already
    const findExist = existUsers.find( user => user.username === userData.username )
    if (findExist) {
        return res.status(409).send({error: true, msg: 'username already exist'})
    }
    //append the user data
    existUsers.push(userData)
    //save the new user data
    saveUserData(existUsers);
    res.send({success: true, msg: 'User data added successfully'})
})
/* Read - GET method */
app.get('/', (req, res) => {
    const users =req.body
    res.send(users)
})
/* Update - Patch method */
app.patch('/patch', (req, res) => {
    //get the username from url
    const username = req.params.username
    //get the update data
    const userData = req.body
    //get the existing user data
    const existUsers = {fullname:'chan',age:34,username:"chan23",password:"cn2334"}
    //check if the username exist or not       
    //const findExist = existUsers.find( user => user.username === username );
    if (existUsers.username===username) {
        return res.status(409).send({error: true, msg: 'username not exist'})
    }
    //filter the userdata
    //const updateUser = existUsers.filter( user => user.username !== username )
    if(existUsers.username===username){
    //push the updated data
    existUsers.push(userData)
    }
    //finally save it
    saveUserData(existUsers)
    res.send({success: true, msg: 'User data updated successfully'})
})
/* Delete - Delete method */
app.delete('/', (req, res) => {
    const username = req.params.username
    //get the existing userdata
    const existUsers = req.body
    //filter the userdata to remove it
    //const filterUser = existUsers.filter( user => user.username !== username )
    if(existUsers.username===username){
    if ( existUsers.length === filterUser.length ) {
        return res.status(409).send({error: true, msg: 'username does not exist'})
    }
}
    //save the filtered data
    saveUserData(existUsers)
    res.send({success: true, msg: 'User removed successfully'})
    
})
/* util functions */
//read the user data from json file
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}
//get the user data from json file
const getUserData = () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)    
}
/* util functions ends */
//configure the server port
app.listen(3071, () => {
    console.log('Server runs on port')
})