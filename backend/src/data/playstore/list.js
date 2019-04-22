/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

/**
 * Creates a sum handler
 * @param {string} condition 
 */
const createList = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            let query = `
            SELECT ${column} as id, ${column} as label
            FROM ${config.table}
            GROUP BY ${column}
            `;
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

exports.categories = createList('category');

