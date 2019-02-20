/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');

/**
 * Creates a count handler
 * @param {string} condition 
 */
const createCounter = (condition) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `SELECT COUNT(*) FROM ${config.table}`;
            if (condition) { query += ' WHERE ' + condition };
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({ total: rows[0]['COUNT(*)'] });
                }
            })
        }
    });
}

/* Counts all rows without condition */
exports.all = createCounter();

/* Counts all rows where the attribute state is successful */
exports.successes = createCounter(`state = 'successful'`);

/* Counts all rows where the attribute state is failed */
exports.failures = createCounter(`state = 'failed'`);