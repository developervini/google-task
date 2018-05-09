const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

var Task = new Schema(
    {
        name: String,
        description: String,
        categoryId: ObjectId,
        created: { type: Date, default: Date.now },
        end: { type: Date, default: Date.now }
    }
)

module.exports = mongoose.model('Task', Task, 'task')