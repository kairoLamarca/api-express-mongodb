const express = require('express');
const bookRouter = require('./routes/bookRouter');

const app = express();

app.use('/api/Books', bookRouter);

const port = process.env.PORT || 5656;

//routes go here

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})