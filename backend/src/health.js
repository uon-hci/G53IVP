/* Status */
exports.status = (req, res, next) => {
    res.status(200).json({ status: 'UP' });
}