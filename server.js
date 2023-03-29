const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const dbConnection = require('./app/config/db')
const fileUpload = require('express-fileupload')

require("colors")
require("dotenv").config()

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/v1',require('./app/api/v1/routes.js')(express));

const port = process.env.PORT || 4000
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/NewApp"

dbConnection(DB_URL)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})