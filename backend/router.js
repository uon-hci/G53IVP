/* Modules */
const router = require('express').Router();
const health = require('./src/health');
const errors = require('./src/errors');
const data = require('./src/data/router');

/* Router */
router.get('/', health.status);
router.use('/data', data);
router.use(errors.error);
router.use(errors.nullRoute);

/* Export */
module.exports = router;