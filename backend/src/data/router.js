/* Modules */
const router = require('express').Router();
const kickstarterRouter = require('./kickstarter/router');

/* Router */
router.use('/kickstarter', kickstarterRouter);

/* Export */
module.exports = router;