const express = require('express');
const router = express.Router();

let Todo = require('../models/todo');

// Get all todo-s
router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

// Get done todo-s
router.get('/done', (req, res) => {
    Todo.find({'isDone': true}, (err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

// Get not done todo-s
router.get('/notDone', (req, res) => {
    Todo.find({'isDone': false}, (err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

// Get one todo from id
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

// Add new todo
router.post('/add', (req, res) => {
    let todo = new Todo();
    todo.name = req.body.name;
    todo.description = req.body.description;
    todo.save((err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Successful todo upload!');
            res.json({
                'successCode': 'SUCCESS',
                'message': 'Successful todo upload',
                'todo': todo
            });
        }
    }));
});

module.exports = router;