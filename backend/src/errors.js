/* Generic errors */
exports.error = (err, req, res, next) => {
    const status = err.status ? err.status : 500;
    const message = err.message ? err.message : 'internal server error';
    res.status(status).json({ message: message });
}

/* Null route */
exports.nullRoute = (req, res, next) => {
    res.status(404).json({ message: 'not found' });
}