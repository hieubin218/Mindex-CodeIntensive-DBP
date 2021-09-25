import React from "react";
import "./Countries.css";

function CoutriesTotalCases({countriesSummary}) {
    return (
        <div className="table-wrapper-scroll-y containerCases" style={{height: "500px", overflow: "scroll"}}>
            <table className="table table-bordered table-striped mb-0" >
                <thead>
                    <tr className="text-white bg-dark text-center Header" style={{position: "sticky", top: "0"}}>
                        <th></th>
                        <th>Country and Location</th>
                        <th>Total Cases</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>

                <tbody>
                   
                    {
                        countriesSummary.length > 0 ? (countriesSummary.map((item, index) =>{
                            const {Country, TotalConfirmed, CountryCode, TotalDeaths} = item;
                            const code = CountryCode.toLowerCase();

                            return (
                                <tr className="text-center" key={index}>
                                    <td>
                                        <img src={`https://flagcdn.com/16x12/${code}.png`} alt="countryFlag"></img>
                                    </td>
                                    <td>
                                        <a href={`country/${code}`} className="location">{Country}</a>
                                    </td>
                                    <td>{TotalConfirmed}</td>
                                    <td>{TotalDeaths}</td>
                                </tr>
                            );
                        })

                        ) : (
                            <p> Ups!! Something wrong! Please Reload the Page or contact developer</p>
                        )
                    }
                </tbody>
            </table>

        </div>
    )

}


export default CoutriesTotalCases;

                       
