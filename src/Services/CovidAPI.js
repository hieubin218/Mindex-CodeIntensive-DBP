import axios from "axios";




const baseURL = "https://api.covid19api.com";

const CovidAPI = {
    // All countries name 
    onFetchAllCountries: () => {
        return axios.get(`${baseURL}/countries`);
    },

    onGetReportCountry: (country) => {
        return axios.get(`${baseURL}/dayone/country/${country}`);
    },

    onGetFlagCountry: (flag) => {
        return axios.get(`https://flagcdn.com/16x12/${flag}.png`);
    },

    onGetCountriesSummary: (all) => {
        return axios.get("https://api.covid19api.com/summary")
    }
};

export default CovidAPI;


// Lấy danh sách các Countries về covid
    // https://api.covid19api.com/countries 