import axios from './customizeAxios';



const fetchAllUser = (page) => {

    return axios.get(`/api/users?page=${page}`);
}

export { fetchAllUser };