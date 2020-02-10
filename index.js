const express = require('express');

const Data = require('./data/db');

const server = express ();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ hello: "Server running"})
})

server.get('/api/users', (req, res) => {
    Data.find()
    .then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: "The users information could not be retrieved." })
    })
})

server.get('/api/users/:id', (req, res) => {
    
})

server.post('/api/users', (req, res) => {
    const dbInfo = req.body;

    if (!dbInfo.name || !dbInfo.bio)
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." })
    Data.insert(dbInfo)
    .then(data => {
            res.status(201).json(data);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: "There was an error while saving the user to the database" })
    })
})

const port = 5000;
server.listen(port, () => console.log(`API on port ${port}`));
