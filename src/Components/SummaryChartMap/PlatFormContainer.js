import React from 'react'
import {Grid} from "@material-ui/core";
import CovidLineChart from './CovidLineChart';


function PlatFormContainer() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <CovidLineChart />

                </Grid>


                <Grid item sm={4} xs={12}>


                </Grid>
            </Grid>
        </div>
    )
};

export default PlatFormContainer;


/**NOTE:
 * GRID of material UI  based on FlexBox CSS
 */