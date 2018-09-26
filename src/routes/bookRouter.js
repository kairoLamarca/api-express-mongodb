const express = require('express');
const bookRouter = express.Router();

bookRouter
    .get('/', (req,res) => {
        res.json(...)
    })
    .get('/2', (req,res) => {
        res.json(...)
    })
export default bookRouter;