/* Modules */
import axios from 'axios';

/**
 * Fetch data from url
 * @param {string} url 
 * @param {function} setter 
 */
const get = async(url, setter) => {
    const result = await axios(url);
    console.log(result);
    setter(result.data);
}

export default {
    get
};