/* Modules */
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();

/* Database */
let db = null;

/**
 * Open sqlite3 database
 */
const open = (callback) => {
    const pathToDB = process.env.SQLITE_PATH;
    db = new sqlite3.Database(pathToDB, (err) => {
        callback(err);
    });
}

/**
 * Retrieve database
 */
exports.get = (callback) => {
    if (db) {
        callback(null, db);
    } else {
        open((err) => {
            callback(err, db);
        });
    }
}
