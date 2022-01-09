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
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	state: {
		type: String,
		required: false,
	},
	country: {
		type: String,
		required: false,
	},
	pincode: {
		type: String,
		required: false,
	},
})

// name  address gender dob state city pincode

module.exports = model("users", User)
