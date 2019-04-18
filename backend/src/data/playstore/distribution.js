/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

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
                    rows = rows.filter(row => row.label != 'NaN');
                    rows.forEach(row => row.label = formatter.label(row.label));
                    res.status(200).json(rows);
                }
            })
        }
    });
}

exports.categories = createDistributor('category');
exports.types = createDistributor('type');
exports.ratings = createDistributor('rating');
