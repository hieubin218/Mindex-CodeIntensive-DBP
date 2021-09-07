import axios from "axios";

const baseURL = "https://api.github.com";

// call UserAPI.onFetchUsers and transmit a value in it
// Object {function}: value of Object is a function
const UserAPI = {
    searchUser: (search) => {
        return axios.get(`${baseURL}/search/users?q=${search}`);

    },

    // Add More key and services
    fetchUsers: () => {
        return axios.get(`${baseURL}/users`); // return Promise
    },

    // User Repositories
    searchUserRepo: (UserRepo) => {
        return axios.get(`${baseURL}/users/${UserRepo}/repos`);
    }

    
};
export default UserAPI;