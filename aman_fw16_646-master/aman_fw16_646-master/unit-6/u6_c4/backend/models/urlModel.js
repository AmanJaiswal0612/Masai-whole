const mongoose = require('mongoose')

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    createdAt: Date
})

// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema)
