import axios from 'axios';
import {getLS} from '../helpers/localstorage';

export default axios.create(
    {
        baseURL: 'http://10.52.72.181/wfpedidos_api/public/api/',
        headers: {
            common: {
                Authorization: `Bearer ${getLS('token')}`
            }
        }
    }
);
