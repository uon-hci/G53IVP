/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');
const wordMiner = require('../../utils/wordMiner');
const cacheWrapper = require('../../utils/cacheWrapper');

/**
 * Creates a custom handler
 * @param {string} column 
 */
const createFreePaidBy = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `
            SELECT ${column} as id, ${column} as label, 
            (1.0 * sum(case when type = 'Paid' Then 1 else 0 end) / count(*) * 100) as paid,
            (1.0 * sum(case when type = 'Free' Then 1 else 0 end) / count(*) * 100) as free
            FROM ${config.table}
            GROUP BY ${column}`;
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    rows.forEach(row => row.label = formatter.label(row.label));
                    res.status(200).json(rows);
                }
            })
        }
    });
}

/**
 * Creates a custom handler
 * @param {string} column 
 */
const createGenreListByCategory = () => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `
            SELECT category as id, category as label, genre
            FROM ${config.table}
            WHERE rating IS NOT NULL
            GROUP BY category, genre`;
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    let tree = {};
                    rows.forEach(row => row.label = formatter.label(row.label));
                    rows.forEach(row => {
                        if (!tree[row.id]) { tree[row.id] = { id: row.id, label: row.label, genres: [] }; }
                        if (formatter.label(row.genre) != row.label) {
                            tree[row.id].genres.push({
                                id: row.genre,
                                label: formatter.label(row.genre)
                            }); 
                        }
                    });
                    res.status(200).json(tree);
                }
            })
        }
    });
}

/**
 * Creates a custom handler
 * @param {string} column 
 */
const createReviewsRatingsCorrelation = () => (req, res, next) => {
    const cacheKey = 'reviewsRatingsCorrelation';
    cacheWrapper(cacheKey, req, res, next, (myCache) => {
        db_tool.get((err, db) => {
            if (err) {
                next(err);
            } else {
                let query = `
                SELECT reviews as x, rating as y
                FROM ${config.table}
                WHERE rating IS NOT null
                AND reviews IS NOT null
                AND rating >= 4`;
                db.all(query, [], (err, rows) => {
                    if (err) {
                        next(err);
                    } else {
                        let map = {};
                        rows.map(row => {
                            if(!map[row.y]) { 
                                map[row.y] = {};
                                map[row.y].data = []; 
                            }
                            map[row.y].data.push(row);
                        });
                        let groups = [];
                        const keys = Object.keys(map);
                        for (let i in keys) {
                            const id = keys[i];
                            const data = map[keys[i]].data;
                            groups.push({ id, data });
                        }
                        groups.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                        myCache.set(cacheKey, groups);
                        res.status(200).json(groups);
                    }
                })
            }
        });
    });
}

/**
 * Creates a custom handler
 */
const createReviewsMiner = () => (req, res, next) => {
    const cacheKey = 'reviewsMiner';
    cacheWrapper(cacheKey, req, res, next, (myCache) => {
        db_tool.get((err, db) => {
            if (err) {
                next(err);
            } else {
                let query = `
                SELECT group_concat(translated_review) as text
                FROM ${config.extra}
                WHERE translated_review IS NOT NULL`;
                db.all(query, [], (err, rows) => {
                    if (err) {
                        next(err);
                    } else {
                        const mining = wordMiner(rows[0].text, 300, 100);
                        myCache.set(cacheKey, mining);
                        res.status(200).json(mining);
                    }
                })
            }
        });
    });
}

/**
 * Creates a custom handler
 */
const createTopSentiments = () => (req, res, next) => {
    const cacheKey = 'topSentiments';
    cacheWrapper(cacheKey, req, res, next, (myCache) => {
        db_tool.get((err, db) => {
            if (err) {
                next(err);
            } else {
                const limit = req.query.limit ? req.query.limit : 10;
                const wordLimit = req.query.wordlimit ? req.query.wordlimit : 5;
                let query = `
                SELECT app, group_concat(translated_review) as reviews, count(*) as count
                FROM ${config.extra}
                WHERE sentiment = 'positive'
                GROUP BY app
                ORDER BY count DESC
                LIMIT ${limit}`;
                db.all(query, [], (err, positive) => {
                    if (err) {
                        next(err);
                    } else {
                        query = `
                        SELECT app, group_concat(translated_review) as reviews, count(*) as count
                        FROM ${config.extra}
                        WHERE sentiment = 'negative'
                        GROUP BY app
                        ORDER BY count DESC
                        LIMIT ${limit}`;
                        db.all(query, [], (err, negative) => {
                                positive.forEach(row => row.reviews = wordMiner(row.reviews, 1, wordLimit));
                                negative.forEach(row => row.reviews = wordMiner(row.reviews, 1, wordLimit));
                                myCache.set(cacheKey, { positive, negative });
                                res.status(200).json({ positive, negative });
                        })
                    }
                })
            }
        });
    });
}
exports.freePaidByCategory = createFreePaidBy('category');
exports.genreListByCategory = createGenreListByCategory();
exports.reviewsRatingsCorrelation = createReviewsRatingsCorrelation();
exports.reviewsMiner = createReviewsMiner();
exports.topSentiments = createTopSentiments();

