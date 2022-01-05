require("regenerator-runtime")
require("dotenv/config")
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect(process.env.ATLAS_URI, () => console.info(`MongoDB Atlas connected!`))

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.info(`Server running on port ${PORT}`))

const UserRoute = require("./routes/User-route")

app.use("/users", UserRoute)
