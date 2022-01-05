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

exports.deleteDetails = async (req, res) => {
	const id = req.params.id
	console.log(id)
	try {
		const deleted = await User.findOneAndDelete({ _id: id })
		return res.status(200).json({ Deleted: deleted })
	} catch (error) {
		res.status(500).json(error.message)
	}
}
