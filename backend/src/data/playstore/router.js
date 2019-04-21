/* Modules */
const router = require('express').Router();
const count = require('./count');
const sum = require('./sum');
const distribution = require('./distribution');

/* Router */
router.get('/count', count.all);
router.get('/distribution/categories', distribution.categories);
router.get('/distribution/types', distribution.types);
router.get('/distribution/ratings', distribution.ratings);
router.get('/distribution/sizes', distribution.sizes);
router.get('/distribution/content_ratings', distribution.contentRatings);
router.get('/sum/installs', sum.installs);

/* Export */
module.exports = router;