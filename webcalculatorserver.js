//use Express library
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

router.get('/addproduct',(req,res) => {
			//the same as res.write/res.end in previous labs (without using Express)
			//no need to write to HTTP response header: Content-type
			res.sendFile(path.join(__dirname + '/addproduct.html'));
			//res.send('This is PRODUCT page');
		});

router.get('/addcustomer',(req,res) => {
			//the same as res.write/res.end in previous labs (without using Express)
			//no need to write to HTTP response header: Content-type
			res.sendFile(path.join(__dirname + '/addcustomer.html'));
			//res.send('This is CUSTOMER page');
		});

router.get('/cart',(req,res) => {
			//the same as res.write/res.end in previous labs (without using Express)
			//no need to write to HTTP response header: Content-type
			res.send('This is CART page');
		});
router.get('/addcategory',(req,res) => {
	//the same as res.write/res.end in previous labs (without using Express)
	//no need to write to HTTP response header: Content-type
	res.sendFile(path.join(__dirname + '/addcategory.html'));
	//res.send('This is CART page');
});

app.use('/',router);
app.listen(port);
console.log(`My app is running at port ${port}`);
