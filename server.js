
const express = require("express");
const app = express(); // server instantiate
const PORT = 4000;

const db = require("./db");
// const Person = require("./Models/person");

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body me data communicates


// IMPORT the Routes File
const personRoute = require("./Routes/personRoutes") ;

// use the routers
app.use("/", personRoute) ;


app.get("/", (req, res) => {
  res.send("<h1> This is Home Page . </h1>");
});

// Activate Server
app.listen(PORT, () => {
  console.log(`Server started at Port no ${PORT}`);
});



// const { size } = require("lodash");

// const fs = require("fs") ;
// const os = require("os") ;

// const user = os.userInfo() ;
// console.log(user) ;

// fs.appendFile('greeting.txt', 'Hi ' + user.username + count + " " + '!\n', () => {
// 	console.log("File is created Successfully 😎") ;
// 	count = count+1 ;
// })

// console.log(fs) ;
// console.log(os) ;

// IMPORT FILE
// const notes = require("./notes") ;

// console.log("Server Page Started") ;

// const age = notes.age ;

// const sum = notes.addNumber(75, 25) ;

// console.log(age) ;
// console.log(sum) ;

// importing Lodash npm package
// let lodash = require('lodash');

// let data = ["person", 1, 2, 3, "persion", "name", "person", "name", 1, 2, 3, "age", "2"] ;

// const filter = lodash.uniq(data) ;
// console.log("Filtered Data : ",filter) ;

// app.get("/ambresh", (req, res) => {
// 	res.send("Welcome to the AMBRESH VAISHYA !") ;
// })

// app.get("/Daal" , (req, res) => {
// 	res.send("DAAL is already making process are started") ;
// })

// app.get("/idli", (req, res) => {
// 	customize_idli = {
// 		name: "Rava Idli",
// 		size: "10 cm diameter",
// 		is_sambhar: true,
// 		is_chutney: false,
// 		message: "Please make EDLI as soon as possible and not compromized to food quality with of all perfect gradients."
// 	}
// 	res.send(customize_idli) ;
// })

