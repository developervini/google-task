const mongoose = require('mongoose')
const Schema = mongoose.Schema

var Category = new Schema(
    {
        name: String
    }
)

module.exports = mongoose.model('Category', Category, 'category')