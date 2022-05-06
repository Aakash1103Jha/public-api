const { Schema, model } = require("mongoose")

const Employee = Schema({
	name: {
		type: String,
		required: true,
	},
	linkedin: {
		type: String,
		required: true,
	},
    mobile: {
		type: String,
		required: true,
	},
    email: {
		type: String,
		required: true,
	},
    company: {
		type: String,
		required: true,
	},
    title: {
		type: String,
		required: true,
	},
    group: {
		type: String,
		required: true,
	},
})

// name  address gender dob state city pincode

module.exports = model("employees", Employee)
