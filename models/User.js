const { Schema, model } = require("mongoose")
const User = Schema({
	name: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},
})

// name  address gender dob state city pincode

module.exports = model("users", User)
