const router = require('express').Router();
const store = require('../../db/store');
//Notes are saved at api/notes
router.get('/notes', (req, res) => {
    store 
      .getNotes()
      .then(notes => {
        res.json(notes)
      })
      .catch(err => {
        res.status(500).json(err)
      })
    });

//Path of what the arrays will be
router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    console.log(req.body)
    store 
      .addNotes(req.body)
      .then(note => {
        res.json(note)
      })
      // .catch (err => {
      //   res.status(500).json(err)
      // })
  });

//Route infomation to delete
router.delete('/notes/:id', (req, res) =>{
  store
  .removeNotes(req.params.id)
  .then(()=> res.json({ok: true}))
      
});

module.exports =router;


