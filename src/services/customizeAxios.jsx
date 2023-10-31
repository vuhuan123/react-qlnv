import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reqres.in'
});



// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const res = {};
    if (error.response) {
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;

    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser 
        // and an instance of http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return res
});

export default instance;