/* Status */
const root = require('./root.json');

exports.status = (req, res, next) => {
	res.status(200).json(root);
};
