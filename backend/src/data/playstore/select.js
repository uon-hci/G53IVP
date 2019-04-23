/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');

/**
 * Creates a select handler
 */
const select = (req, res, next) => {
    db_tool.get((err, db) => {
        if (err) {
            next(err);
        } else {
            const table = req.query.extra ? config.extra : config.table;
            const columns = (req.query.columns && req.query.columns.split(',')) || '*';
            const as = (req.query.as && req.query.as.split(',')) || columns;
            let query = `SELECT `
            for (let i in columns) {
                query += `${columns[i]} as ${as[i]}`;
                if (i < columns.length - 1) { query += ', '; }
            }
            query += `\nFROM ${table}`;
            for (let i in columns) {
                if (i > 0) {
                    query += `\nAND ${columns[i]} IS NOT NULL`;
                } else {
                    query += `\nWHERE ${columns[i]} IS NOT NULL`;
                }
            }
            if (req.query.filter) {
                query += `\nAND ${req.query.filter} = '${req.query[req.query.filter]}'`;
            }
            console.log(query)
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

module.exports = select;

