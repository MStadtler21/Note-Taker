const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;


app.get('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;

        res.json(data);
    });
});


app.post('./api/notes', (req, res) => {
    const newNote = req.body;

    const noteWithId = {...newNote, id: uuidv4()}

    fs.appendFile('../../../db/db.json', noteWithId, function (err) {
        if (err) throw err;

        res.json(newNote);
    });
});

app.delete('/api/notes/:id', () => {
    
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;

        const filteredNotes = data.filter((note) => note.id !== id);

        fs.writeFile('../db/db.json', filteredNotes,  (err, data) => {
            console.log('done');
        });

        res.json(data);
    });
});



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))