/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');

/**
 * Creates an average handler
 * @param {string} column 
 */
const createAverager = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `SELECT avg(${column}) as average, count(${column}) as total
            FROM ${config.table}`;
            if (req.query.filter) {
                query += `\nWHERE ${req.query.filter} = '${req.query[req.query.filter]}'`;
            }
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json(rows[0]);
                }
            })
        }
    });
}

exports.ratings = createAverager('rating');