const router = require('express').Router();
const { filterByQuery, createNewNotes, validateNotes, deleteNote } = require('./public/assets/notes.html');
const { notes } = require ('./package.json');
const req = require('express/lib/request');
const res = require('express/lib/response');

//Notes are saved at api/notes
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

//Path of what the arrays will be
router.get('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    }else{req.body.id =0}
    res.json(createNewNotes(req.body, notesArray));
   
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    if (!validateNotes(req.body)) {
      res.status(400).send('The notes are not properly formatted.');
    } else {
      const notes = createNewNotes(req.body, notes);
      res.json(notes);
    }
  });

//Route infomation to delete
router.delete('/notes', (req, res) =>{
    const{id} = req.params
    notesArray = deleteNote(id, notesArray);
    res.json(notesArray);
});

module.exports =router;


