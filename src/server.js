const express = require('express');
const bookRouter = require('./routes/bookRouter');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongoose
const db = mongoose.connect('mongodb://localhost/api-test');

app.use('/api/Books', bookRouter);

const port = process.env.PORT || 5656;

//routes go here

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})