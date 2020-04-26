const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/database');

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.log(err);
});

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Route Files
let todos = require('./routes/todos');
app.use('/todos', todos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});