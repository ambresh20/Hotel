const mongoose = require("mongoose") ;

const personSchema = new mongoose.Schema({
	name: {
	  type: String,
	  required: true
	},
	email: {
	  type: String,
	  required: true
	},
	mobile: {
	  type: String,
	  required: true
	},
	work: {
	  type: String,
	  enum: ["chef", "waiter", "manager"],
	  required: true
	},
	salary: {
	  type: Number,
	  required: true
	}
  });


// Created Models of person
const Person = mongoose.model('Person', personSchema) ;
module.exports = Person ;





