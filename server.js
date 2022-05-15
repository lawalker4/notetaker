const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/html/Routes');

app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static('public'));

//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
resizeBy.json(noteData);


app.listen(PORT,() => {
    console.log('API server now on port ${PORT}!');
});

