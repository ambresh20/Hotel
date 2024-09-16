// URL DB : mongodb://<hostname>:<port>/<databaseName

const mongoose = require("mongoose") ; 
const mongoURL = "mongodb://localhost:27017/hotaldatabase" ;

//set up mongoDB connection
mongoose.connect(mongoURL) ;
// mongoose.connect(mongoURL, {
// 	useNewUrlParser : true,
// 	UseUnifiedTopology: true,
// }) ;

// Get the default connection
const db = mongoose.connection ;

db.on('connected', () => {
	console.log("Connected to MongoDB server Successfully") ;
})

db.on('error', (err) => {
	console.error("MongoDB connection Issues", err) ;
})

db.on('disconnected', () => {
	console.log("MongoDB Disconnected") ;
})


module.exports = db ;