const User = require("../models/User")

exports.getDetails = async (req, res) => {
	try {
		const details = await User.find()
		return res.status(200).json(details)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}
exports.addDetails = async (req, res) => {
	if (!req.body) {
		return res.status(404).json("Invalid or empty data")
	}
	const newDetails = new User({
		...req.body,
	})
	try {
		const savedDetails = await newDetails.save()
		return res.status(201).json(savedDetails)
	} catch (error) {
		return res.status(500).json(error.message)
	}
}
exports.editDetails = async (req, res) => {}
exports.deleteDetails = async (req, res) => {}

// name: req.body.name,
// address: req.body.address,
// gender: req.body.gender,
// dob: req.body.dob,
// city: req.body.city,
// state: req.body.state,
// country: req.body.country,
// pincode: req.body.pincode,
