import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID sKUFe7NjveK8Cjk20M1BXREiHcst3ekBSdL1L04wLfE'
    }
});
