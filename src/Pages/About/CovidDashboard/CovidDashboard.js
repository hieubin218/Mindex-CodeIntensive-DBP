import React, { Component } from 'react'
import "./CovidDashboard.css";
import CovidAPI from "../../Services/CovidAPI";

import CovidCard from "../../Components/CovidCard/CovidCard";
import CountriesTotalCases from "../../Components/CountriesTotalCases/CountriesTotalCases";
import CovidChart from '../../Components/CovidChart';



export default class CovidDashboard extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLoading: false,
            countries: [],
        };
    };

    getAllCountries = async () => {
        try {
            this.setState({
                isLoading: true,
            });
            const response = await CovidAPI.fetchAllCountries();
            this.setState({
                isLoading: false,
                countries: response.data,             
            });
        } catch(error) {
            throw(error);
        }
    }


    render() {
        return (
            <div>
                
                <CovidCard />
                <CountriesTotalCases />
                <CovidChart />
            </div>
        )
    }
}
