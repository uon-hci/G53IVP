/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');

/**
 * Creates a count handler
 * @param {string} condition 
 */
const createCounter = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `SELECT COUNT(${column}) as total FROM ${config.table}`;
            if (req.query.filter) {
                query += `\nWHERE ${req.query.filter} = '${req.query[req.query.filter]}'`;
            }
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json({ total: rows[0].total });
                }
            })
        }
    });
}

/* Counts all rows without condition */
exports.ratings = createCounter('rating');