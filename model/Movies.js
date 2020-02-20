const mongoose = require('mongoose')

const MoviesSchema = mongoose.Schema({
    title: String,
    years: Number,
    poster: String,
    trailer: String,
    description: String
})

module.exports = mongoose.model('movies', MoviesSchema);