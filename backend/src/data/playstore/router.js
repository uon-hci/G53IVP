/* Modules */
const router = require('express').Router();
const count = require('./count');
const distribution = require('./distribution');

/* Router */
router.get('/count', count.all);
router.get('/distribution/categories', distribution.categories);

/* Export */
module.exports = router;