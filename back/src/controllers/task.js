const Task = require('../models/task')
const ObjectId = require('mongoose').mongo.ObjectId

class TaskController {
    find(req, res) {
        Task.findOne({ _id: ObjectId(req.params.id) }, (error, task) => {
            if (error)
                res.json({ error: error })
            if (task) {
                res.json({
                    task: task
                })
            } else {
                res.json({
                    msg: 'Not found task'
                })
            }
        })
    }

    findMany(req, res) {
        Task.find(req.body, (error, tasks) => {
            if (error)
                res.json({ error: error })
            if (tasks) {
                res.json({
                    tasks: tasks
                })
            } else {
                res.json({
                    msg: 'Not found results'
                })
            }
        })
    }

    list(req, res) {
        Task.find((error, tasks) => {
            if (error)
                res.json({ error: error })

            if (tasks) {
                res.json({
                    tasks: tasks
                })
            } else {
                res.json({
                    msg: 'Not found results'
                })
            }
        })
    }

    create(req, res) {
        Task.create(req.body, (err, task) => {
            if (err)
                res.json({ error: error })

            res.json({
                msg: 'Saved task'
            })
        })
    }

    edit(req, res) {
        Task.findByIdAndUpdate(ObjectId(req.params.id), req.body, { new: true }, (err, task) => {
            if (err)
                res.json({ error: error })

            res.json({
                msg: 'Updated task'
            })
        });
    }

    delete(req, res) {
        Task.remove({ _id: ObjectId(req.params.id) }, (err, result) => {
            if (err)
                res.json({ error: error })

            if (result.n > 0) {
                res.json({
                    msg: 'Deleted task'
                })
            } else {
                res.json({
                    msg: 'Not found task'
                })
            }

        });
    }
}

const controller = new TaskController()
module.exports = controller