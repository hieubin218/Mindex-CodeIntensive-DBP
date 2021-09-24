// import React from 'react'
import React from 'react';
import {Grid} from "@material-ui/core";
import CovidCard from "./CardItem";


// Grid use for Column, spacing {3} khoảng cách giữa cách column là 3
const CovidSummaryData = ({CovidCountrySummaryData}) => {
   
    return (
        <Grid container spacing={3} style={{marginTop: "30px"}}>
            {/* Chia ra 3 grid -> 3 Columns (4-4-4 = 12)
            Bao gồm attribute (thuộc tính) là item, sm (size of màn hình)
            xs: on phone (space 12 is full line of each sub-container) */}

            {
                CovidCountrySummaryData.map( (data, index) => {
                    const {title, count, type} = data;
                    return (
                            <Grid item sm={4} xs={12}>
                                <CovidCard title={title} count={count} 
                                        type={type}   key={index}
                                />
                            </Grid>
                    )
                })
            }
        </Grid>
    )
}
export default CovidSummaryData;