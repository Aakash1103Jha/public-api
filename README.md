# Public API - CRMNEXT

### A project for anyone making an onboarding project in CRMNEXT

[![NodeJS with Webpack](https://github.com/Aakash1103Jha/public-api/actions/workflows/node-webpack.yml/badge.svg?branch=master)](https://github.com/Aakash1103Jha/public-api/actions/workflows/node-webpack.yml)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/Aakash1103Jha/public-api)
![GitHub repo size](https://img.shields.io/github/repo-size/Aakash1103Jha/public-api)

Feedback and questions are welcome - thedevdesigner@gmail.com.
If you would like some endpoints to be added, specific to your own project, you can add it as an Issue - with elaborate description.

## Tech / Framework Used

This is a NodeJS + Express application, using MongoDB Atlas as a nosql database solution

## Endpoints

All requests will have the same baseUrl: `https://crmnext-public-api.herokuapp.com/users`. Sending a `GET` request to the `baseUrl` will return a JSON object containing `error` and a `github` link.

### Active Endpoints

The following endpoints follow a schema with the following mandatory fields:

```javascript
{
	name: String
	addres: String
	gender: String
	dob: String
	city: String
	state: String
	country: String
	pincode: String
}
```

GET: `/get-details`

Returns an array of one or more objects following the above schema

---

POST: `/add-details`

Returns an object that was added to the database

---

DELETE: `/delete-detail/:id`

Returns an object containing a `doc` (document that was deleted) and `message` (containing the `_id` of the deleted document) fields

---

PUT: `/edit-details/:id`

Returns an object containing an `update` (field(s) and value(s) that were) and `message` (containing the `_id` of the updated document) fields
