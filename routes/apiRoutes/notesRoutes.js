const router = require('express').Router();
const { createNewNotes, deleteNote } = require('./public/assets/notes');
const { notes } = require ('../../package.json');

//Notes are saved at api/notes
router.get('/notes', (req, res) =>{
    let results = notes;
    if (req.query){
        results = filterByQuery(req.query, results);
    }
    resizeBy.json(results);
});

//Path of what the arrays will be
router.post('/notes', (req, res) => {
    if(notesArray){
        req.body.id = notesArray.length.toString();
    }else{req.body.id =0}
    res.json(createNewNotes(req.body, notesArray));
   
});

//Route infomation to delete
router.delete('/notes', (req, res) =>{
    const{id} = req.params
    notesArray = await deleteNote(id, notesArray);
    res.json(notesArray);
});

module.exports =router;


