/* Modules */
const router = require('express').Router();
const list = require('./list');
const count = require('./count');
const sum = require('./sum');
const distribution = require('./distribution');
const custom = require('./custom');

/* Router */
router.get('/count', count.all);
router.get('/list/categories', list.categories);
router.get('/distribution/categories', distribution.categories);
router.get('/distribution/genres', distribution.genres);
router.get('/distribution/types', distribution.types);
router.get('/distribution/ratings', distribution.ratings);
router.get('/distribution/sizes', distribution.sizes);
router.get('/distribution/content_ratings', distribution.contentRatings);
router.get('/sum/installs', sum.sumInstalls);
router.get('/custom/free_paid_category', custom.freePaidByCategory);
router.get('/custom/genre_list_category', custom.genreListByCategory);

/* Export */
module.exports = router;