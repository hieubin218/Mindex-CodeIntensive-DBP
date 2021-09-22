import axios from "axios";




const baseURL = "https://api.covid19api.com";

const CovidAPI = {
    // All countries name 
    onFetchAllCountries: () => {
        return axios.get(`${baseURL}/countries`);
    },

    onGetReportCountry: (country) => {
        return axios.get(`${baseURL}/dayone/country/${country}`);

    }
};

export default CovidAPI;


// Lấy danh sách các Countries về covid
    // https://api.covid19api.com/countries 