const mongoose = require('mongoose');


const dbConnection = async (DB_URL) => {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
    })
    console.log(`MongoDB connected Successfully`.cyan)
  } catch (error) {
    console.error(`Error: ${error}`.red.underline)
    process.exit(1)
  }
}

module.exports = dbConnection