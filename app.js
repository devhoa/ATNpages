const url = require('url');
const Connection = require('pg').Pool;
const myconnect = new Connection({
	user:'yptuhtbxlhsiyv',
	host: 'ec2-54-83-82-187.compute-1.amazonaws.com',
	database:'d81fu56u77q9l',
	password:'64701ff9c48165aa28b7fb61a7df08af8bbbe23ef008eb787973b8f2457d7d41',
	port:'5432',
	ssl: {
		rejectUnauthorized: false,
  },
});

const express = require('express');
const path = require('path');
//create an application running on Express libary
const app = express();
const router = express.Router();

const port = process.env.port || 3000; 

router.get('/home',(req,res) => {
    //the same as res.write/res.end in previous labs (without using Express)
    //no need to write to HTTP response header: Content-type
    //read home.html and response this html content
    res.sendFile(path.join(__dirname + '/home.html'));
    //res.send('This is ATN HOME page');
    
});

app.use('/',router);
app.listen(port);
console.log(`My app is running at port ${port}`);