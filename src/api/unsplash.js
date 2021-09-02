import axios from 'axios';
require('dotenv').config()
const unsplash_api_key=process.env.REACT_APP_unsplash_api_key
console.log(unsplash_api_key);
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: `Client-ID ${unsplash_api_key}`
    }
});
