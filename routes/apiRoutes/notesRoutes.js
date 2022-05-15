const router = require('express').Router();
// const { filterByQuery, }
const { notes } = require ('../../package.json');

router.get('/notes', (req, res) =>{
    let results = notes;
    if (req.query){
        results = filterByQuery(req.query, results);
    }
    resizeBy.json(results);
});

router.get()


