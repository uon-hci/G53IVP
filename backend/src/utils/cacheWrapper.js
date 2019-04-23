const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

const cacheWrapper = (cacheKey, req, res, next, callback) => {
    myCache.get(cacheKey, (err, value) => {
        if (!err) {
            if (value == undefined) {
                callback(myCache);
            } else {
                res.status(200).json(value);
            }
        } else {
            callback(myCache);            
        }
    });
}

module.exports = cacheWrapper;