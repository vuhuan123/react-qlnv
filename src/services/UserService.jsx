import axios from './customizeAxios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUsers = (name, job) => {
    return axios.post("/api/users", { name, job })

}

const putUpdateUser = (name, job, id) => {
    return axios.put(`/api/users/${id}`, { name, job });
};

const deleteUser = (id) => {
    return axios.delete(`/api/users/${id}`)
}

const loginApi = (email, password) => {
    return axios.post("/api/login", { email, password })

}
export { fetchAllUser, postCreateUsers, putUpdateUser, deleteUser, loginApi };