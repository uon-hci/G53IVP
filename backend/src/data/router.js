/* Modules */
const router = require('express').Router();
const playstoreRouter = require('./playstore/router');

/* Router */
router.use('/playstore', playstoreRouter);

/* Export */
module.exports = router;