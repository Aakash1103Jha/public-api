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

exports.editDetails = async (req, res) => {
	console.log(req.body)
	try {
		const updated = await User.findByIdAndUpdate(req.params.id, req.body, { upsert: false })
		return res.status(200).json({
			updated: req.body,
			message: `Document with _id: ${req.params.id} was updated successfully!`,
		})
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

exports.deleteDetails = async (req, res) => {
	try {
		const deleted = await User.findByIdAndDelete(req.params.id)
		return res.status(200).json({
			doc: deleted,
			message: `Document with _id: ${req.params.id} was deleted successfully!`,
		})
	} catch (error) {
		res.status(500).json(error.message)
	}
}
