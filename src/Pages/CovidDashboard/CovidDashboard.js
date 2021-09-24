import React, {useState, useEffect, useMemo} from 'react'
import "./CovidDashboard.css";
import CovidAPI from "../../Services/CovidAPI";
import CountriesDropBar from '../../Components/SelectedCountriesDropBar/CountriesDropBar';
import CardContainer from "../../Components/CovidCard/CardContainer";
import ChartMapContainer from '../../Components/SummaryChartMap/ChartMapContainer';
import { sortBy } from 'lodash';
import { Typography, Container } from '@material-ui/core';
import moment from 'moment';


// moment.locale("vi")

// axios is a Promise -> use method Then to get data from API
const CovidDashboard = () => {
    // Set default state and default setState
    const [countries, setCountries] = useState([]);
    // Create new state when user change country -> đựng API của country mới 
    const [selectedCountryId, setSelectedCountryId] = useState('');

    // Spining được loading 
    const [isLoading, setIsLoading] = useState(false);

    // Lâý dữ liệu trả về từ API của country nhất định và được lưu trữ ở đây 
    const [countryData, setCountryData] = useState([]);



    // Get data from API by React Hook (useEffect, and dependency [] + call the sub-function)
    useEffect( () => {
        const getAllCountries = async () => {
            setIsLoading(true);
            const response = await CovidAPI.onFetchAllCountries();
            setIsLoading(false);

            const countries = sortBy(response.data, "Country");
            setCountries(countries);



            // set default selected Country when the page first lis loaded
            setSelectedCountryId("vn");

        };
        getAllCountries();
    }, [] );


    // set by the user dang lua chon country
    const onHandleSelectedCountry = (e) => {
        setSelectedCountryId(e.target.value);
    }; 


    // Find which country is selected by Slug and call API
        // useEffect luôn luôn được thực thi sau lần render đầu tiên --> nên có if condition 
        // khi user lựa chọn thì mới render useeffect 
    useEffect( () => {
        if (selectedCountryId) {
            let country = countries.find( 
                (country) => country.ISO2.toLowerCase() === selectedCountryId);
            
            // Get Slug of Object country
            let SlugOfCountry = country.Slug;
            
            // Call API
            CovidAPI.onGetReportCountry(SlugOfCountry)
            .then( (response) => {

                // remove last day của API trả về do dữ liệu ko chính xác
                response.data.pop();
                // set State và gắn vô CountryData []
                setCountryData(response.data) 
            });
        };
        // Array Dependency
    }, [countries, selectedCountryId] )



    // Lấy dữ liệu ngày cuối cùng
    const CovidCountrySummaryData = useMemo(() => {
        if (countryData && countryData.length) {
            const lastDayofData = countryData[countryData.length - 1];

        return [
            {
                title: "ToTal Confimed Cases",
                count: lastDayofData.Confirmed,
                // dựa trên type để tạo ra các style color tương ứng 
                type: "confirmed",
            },
            {
                title: "ToTal Confimed Cases",
                count: lastDayofData.Recovered,
                // dựa trên type để tạo ra các style color tương ứng 
                type: "recovered",
            },
    
            {
                title: "ToTal Confimed Cases",
                count: lastDayofData.Deaths,
                // dựa trên type để tạo ra các style color tương ứng 
                type: "death",
            },
        ]; 
    }
    return [];
    }, [countryData]);
    

    return (
        <Container>
            <Typography variant="h2" component="h2">
            Covid Statistics By Day
            </Typography>

            <Typography>{moment().format("LLLL")}</Typography>


            <CountriesDropBar   countries={countries} 
                                onHandleSelectedCountry={onHandleSelectedCountry}
                                selectedCountryId={selectedCountryId} />
            <CardContainer  CovidCountrySummaryData={CovidCountrySummaryData} />
            <ChartMapContainer countryData={countryData} selectedCountryId={selectedCountryId} />
       </Container>
    )
};

export default CovidDashboard;