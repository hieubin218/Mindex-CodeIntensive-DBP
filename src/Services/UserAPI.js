import axios from "axios";

const baseURL = "https://api.github.com";

// call UserAPI.onFetchUsers and transmit a value in it
// Object {function}: value of Object is a function
const UserAPI = {
    fetchUsers: (search) => {
        return axios.get(`${baseURL}/search/users?q=${search}`);

    },
    
};
export default UserAPI;