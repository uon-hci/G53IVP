/* Modules */
const router = require('express').Router();
const count = require('./count');

/* Router */
router.get('/count', count.all);
// router.get('/count/successes', count.successes);
// router.get('/count/failures', count.failures);

/* Export */
module.exports = router;