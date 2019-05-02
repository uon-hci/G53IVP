/* Modules */
const router = require("express").Router();
const select = require("./select");
const list = require("./list");
const count = require("./count");
const average = require("./average");
const sum = require("./sum");
const distribution = require("./distribution");
const custom = require("./custom");

/* Router */
router.get("/select", select);
router.get("/count/ratings", count.ratings);
router.get("/average/ratings", average.ratings);
router.get("/list/categories", list.categories);
router.get("/distribution/categories", distribution.categories);
router.get("/distribution/genres", distribution.genres);
router.get("/distribution/types", distribution.types);
router.get("/distribution/ratings", distribution.ratings);
router.get("/distribution/sizes", distribution.sizes);
router.get("/distribution/prices", distribution.prices);
router.get("/distribution/reviews", distribution.reviews);
router.get("/distribution/android_versions", distribution.androidVersions);
router.get("/distribution/content_ratings", distribution.contentRatings);
router.get("/sum/installs", sum.sumInstalls);
router.get("/custom/free_paid_category", custom.freePaidByCategory);
router.get("/custom/genre_list_category", custom.genreListByCategory);
router.get(
  "/custom/reviews_ratings_correlation",
  custom.reviewsRatingsCorrelation
);
router.get(
  "/custom/prices_ratings_correlation",
  custom.pricesRatingsCorrelation
);
router.get("/custom/reviews_text_mining", custom.reviewsMiner);
router.get("/custom/top_sentiments", custom.topSentiments);
router.get("/custom/updates", custom.updates);
router.get("/custom/size_tree", custom.sizeTree);

/* Export */
module.exports = router;
