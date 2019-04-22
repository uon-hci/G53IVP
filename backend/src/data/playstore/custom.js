/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

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
                        if (formatter.label(row.genre) != row.label) {
                            if (!tree[row.id]) { tree[row.id] = { id: row.id, label: row.label, genres: [] }; }
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

exports.freePaidByCategory = createFreePaidBy('category');
exports.genreListByCategory = createGenreListByCategory();

