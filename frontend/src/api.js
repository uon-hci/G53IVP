/* Modules */
import axios from 'axios';
let hostname = 'http://localhost:3339';
if (process.env.NODE_ENV == 'production') {
    hostname = 'https://api.ivp.andynroses.me';
}

/**
 * Fetch data from url
 * @param {string} url 
 * @param {function} setter 
 */
const get = async(url, setter) => {
    const result = await axios(hostname + '/data/' + url);
    setter(result.data);
}

export default {
    get
};