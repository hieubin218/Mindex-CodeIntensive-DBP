import React, {useState, useEffect} from 'react';
import {Grid} from "@material-ui/core";
import CovidLineChart from './CovidLineChart';
import CovidMap from './CovidMap';


function PlatFormContainer({countryData, selectedCountryId}) {
    // Save selected country data with map
    const [mapData, setMapData] = useState({});


    // import @highcharts/map-collection trong package.json
    useEffect(() => {
        if (selectedCountryId) {
            // import a promise --> then
            const mapData = import (`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`)
                .then( (response) => setMapData(response));

            setMapData(mapData);
        }
    },  [selectedCountryId]);



    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <CovidLineChart countryData={countryData} />
                </Grid>

                <Grid item sm={4} xs={12}>
                    <CovidMap mapData={mapData} />
                </Grid>
            </Grid>
        </div>
    )
};

export default PlatFormContainer;


/**NOTE:
 * GRID of material UI  based on FlexBox CSS
 */