const router = require('express').Router();
const notesRoutes = require('./notesRoutes');

router.use(require('./notesRoutes'));

module.exports = router;