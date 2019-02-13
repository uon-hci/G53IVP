/* Modules */
const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const router = require('./router');
require('dotenv').config();

/* Server */
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/', router);

/* Start */
server.listen(process.env.PORT, () => {
    console.log(`API started on port ${process.env.PORT}`);
});