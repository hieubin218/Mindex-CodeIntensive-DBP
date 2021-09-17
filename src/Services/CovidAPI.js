import axios from "axios";




const baseURL = "https://api.covid19api.com";

const CovidAPI = {
    // All countries name 
    fetchAllCountries: () => {
        return axios.get(`${baseURL}/countries`);
    }
};

export default CovidAPI;