let mongoose = require('mongoose');

// Todo Schema
let todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    priority: {
        type: Number,
        required: true,
        default: 3
    },
    date: {
        dateBegin: {
            type: String
        },
        dateEnd: {
            type: String
        },
        location: {
            type: String
        }
    },
    preconditionId: {
        type: String
    },
    isDone: {
        type: Boolean,
        required: true,
        default: false
    },
    doneDate: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'space'
    },
    uploadDate: {
        type: String,
        required: true,
        default: Date
    }
});

let Todo = module.exports = mongoose.model('Todo', todoSchema);