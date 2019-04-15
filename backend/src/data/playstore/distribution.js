/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');

/**
 * Creates a distribution handler
 * @param {string} condition 
 */
const createDistributor = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `
                SELECT ${column} as id, ${column} as label, COUNT(*) as value
                FROM ${config.table}
                GROUP BY ${column}
            `;
            db.all(query, [], (err, rows) => {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json(rows);
                }
            })
        }
    });
}

/* Counts all rows where the attribute state is successful */
exports.categories = createDistributor('category');
