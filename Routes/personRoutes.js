const Person = require("../Models/person");

const express = require("express");
const router = express.Router();

// POST routes to add person
router.post("/person", async (req, res) => {
  try {
    const data = req.body;

    // Create a new person document using MongoDB models
    const newPerson = new Person(data);

    // Save the new person in database
    const response = await newPerson.save();
    console.log("Data Saved");
    res
      .status(201)
      .json({ data: response, message: "Person created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET methods to fetch users data
router.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Internal Server Error" });
  }
});

// Dynamically Fetched Data
router.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;  // extract the work type from the URL parameters

    if (workType == "chef" || workType == "waiter" || workType == "manager") {
        const response = await Person.find({ work: workType });
        console.log("Response Fetched");
        res.status(200).json(response);
    } 
	else {
      res.status(450).json({ error: "Invalid Work Types" });
    }
  } catch (error) {
	console.log(error) ;
	res.status(400).json({ error: "Invalid Work Types"}) ;
  }
});

// UPDATES DATA
router.put("/person/:id", async (req, res) => {
	try {
		const personId = req.params.id ;  // Extract id from URL parameters
		const updatedPersonData = req.body ;  // Update data for person 

		const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
			new: true ,   // Return the updated document
			runValidators: true,  // Run MongoDB Validation
		}) ;

		if(!response){
			return res.status(404).json({error: "Person is Not Found"}) ;
		}

		console.log("Data Updated") ;
		res.status(200).json({data: response, message: "Updated Data"}) ;
 	} 
	catch (err) {
		console.log(err) ;
		res.status(400).json({error: "Internal Server Error"}) ;
	}
})

// DELETE Routes
router.delete("/person/:id", async (req, res) => {
	try {
		const id = req.params.id ;

		const response = await Person.findByIdAndDelete(id) ;

		if(!response){
			return res.status(404).json({message: "Person is Not Found"}) ;
		}

		console.log("Data Deleted") ;
		res.status(200).json({data: response, message: "Person Deleted Successfully"}) ;

	} catch (err) {
		console.log(err) ;
		res.status(500).json({error: "Internal Server Error"}) ;
	}
})


// EXPORT MODULE
module.exports = router;
