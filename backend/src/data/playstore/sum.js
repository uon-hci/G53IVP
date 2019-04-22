/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

/**
 * Creates a sum handler
 * @param {string} column 
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
            if (req.query.filter) {
                query += `\nHAVING ${req.query.filter} = '${req.query[req.query.filter]}'`;
            }
            if (req.query.ordered) {
                query += `\nORDER BY value`;
                if (req.query.ordered == 'desc') {
                    query += ' DESC'
                }
            }
            if (req.query.limit) {
                query += `\nLIMIT ${req.query.limit}`;
            }
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

exports.sumInstalls = createSum('installs');

