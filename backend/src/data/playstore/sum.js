/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

/**
 * Creates a distribution handler
 * @param {string} condition 
 */
const createSum = (column) => (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            const group = req.query.by || 'installs';
            let query = `
            SELECT ${group} as id, ${group} as label, SUM(${column}) as value
            FROM ${config.table}
            GROUP BY ${group}
            `;
            if (req.query.skip) {
                query += `\nHAVING value > ${req.query.skip}`;
            }
            if (req.query.ordered) {
                query += `\nORDER BY value`;
                if (req.query.ordered == 'desc') {
                    query += ' DESC'
                }
            }
            console.log(query);
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

exports.installs = createSum('installs');

