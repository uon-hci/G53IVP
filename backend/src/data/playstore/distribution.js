/* Modules */
const db_tool = require('../db_tool');
const config = require('./config');
const formatter = require('../../utils/formatter');

/**
 * Creates a distribution handler
 * @param {string} condition
 */
const createDistributor = column => (req, res, next) => {
	db_tool.get((err, db) => {
		if (err) {
			next(err);
		} else {
			let query = `
            SELECT ${column} as id, ${column} as label, COUNT(*) as value
            FROM ${config.table}
            WHERE ${column} IS NOT NULL
            GROUP BY ${column}
            `;
			if (req.query.filter) {
				let compare = '=';
				if (req.query.compare) {
					compare =
						req.query.compare == 'diff'
							? '!='
							: req.query.compare == 'inf'
							? '<'
							: '>';
				}
				query += `\nHAVING ${req.query.filter} ${compare} '${
					req.query[req.query.filter]
				}'`;
			}
			if (req.query.skip) {
				query += `\nHAVING value > ${req.query.skip}`;
			}
			if (req.query.ordered) {
				query += `\nORDER BY value`;
			}
			console.log(query);
			db.all(query, [], (err, rows) => {
				if (err) {
					next(err);
				} else {
					rows = rows.filter(row => row.label != 'NaN');
					rows.forEach(row => (row.label = formatter.label(row.label)));
					res.status(200).json(rows);
				}
			});
		}
	});
};

/**
 * Creates an acculumated distribution handler
 * @param {string} condition
 */
const createAcculumatedDistributor = column => (req, res, next) => {
	db_tool.get((err, db) => {
		if (err) {
			next(err);
		} else {
			const range = JSON.parse(req.query.range) || [1, 10];
			const width = parseFloat(req.query.width) || 1;
			let query = ``;
			for (let i = range[0]; i < range[1]; i = i + width) {
				if (i > range[0]) {
					query += '\nUNION\n';
				}
				query += `
                SELECT '${i} - ${i + width}' as id, COUNT(*) as value
                FROM ${config.table}
                WHERE ${column} >= ${i}`;
				let upperCompare = '<';
				if (i == range[1] - 1) {
					upperCompare = '<=';
				}
				query += `\nAND ${column} ${upperCompare} ${i + width}`;
				if (req.query.filter) {
					let compare = req.query.sup ? '>' : req.query.inf ? '<' : '=';
					query += `\nAND ${req.query.filter} ${compare} '${
						req.query[req.query.filter]
					}'`;
				}
			}
			db.all(query, [], (err, rows) => {
				if (err) {
					next(err);
				} else {
					rows.sort((a, b) => {
						return (
							parseInt(a.id.split(' - ')[0]) - parseInt(b.id.split(' - ')[0])
						);
					});
					res.status(200).json(rows);
				}
			});
		}
	});
};

exports.categories = createDistributor('category');
exports.genres = createDistributor('genre');
exports.types = createDistributor('type');
exports.ratings = createAcculumatedDistributor('rating');
exports.sizes = createAcculumatedDistributor('size');
exports.reviews = createAcculumatedDistributor('reviews');
exports.prices = createAcculumatedDistributor('price');
exports.contentRatings = createDistributor('content_rating');
exports.androidVersions = createDistributor('android_version');
