const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes/notesRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index')

// Parse URL encoded, JSON and Public
app.use(express.urlencoded({ extended:true}));
app.use(express.json());
app.use(express.static('public'));

//Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT,() => {
    console.log('API server now on port ${PORT}!');
});


