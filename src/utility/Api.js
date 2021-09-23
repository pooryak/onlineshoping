import axios from 'axios';
import constants from '../constants';

export default axios.create({
    baseURL: constants.baseUrl,
    timeout: constants.timeout,
    responseType: constants['Content-Type'],
    headers: {
        Accept: constants.Accept,
        'Content-Type': constants['Content-Type'],
        token: constants.token,
    },
});
