// import React from 'react'
import React from 'react';
import {CardContent, Grid, Card, Typography} from "@material-ui/core";



// Grid use for Column, spacing {3} khoảng cách giữa cách column là 3
const CovidCard = () => {
    return (
        <Grid container spacing={3} style={{marginTop: "30px"}}>
            {/* Chia ra 3 grid -> 3 Columns (4-4-4 = 12)
            Bao gồm attribute (thuộc tính) là item, sm (size of màn hình)
            xs: on phone (space 12 is full line of each sub-container) */}
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">ToTal Confimed Cases</Typography>
                        <Typography component="span" variant="body2"> 132.222</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">ToTal Recovery Cases</Typography>
                        <Typography component="span" variant="body2"> 120.423</Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography component="p" variant="body2">ToTal Death Cases</Typography>
                        <Typography component="span" variant="body2"> 321</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default CovidCard;


/** NOTE:
 * <Typography variant="body2" /> -> material UI dựa trên variant để lấy class tương ứng để set Style cho <Typography> tag đó
 * 
 */





// export default class CovidCard extends Component {
   
//     render() {
//         const {type, UptoDateCovidData} = this.props;

//         const getClassName = () => {
//             switch(type) {
//                 case "confirmed":
//                     return "#fc3c3c";
//                 case "recovered":
//                     return "#90ee90";
//                 case "death":
//                     return "#6a5d5d";
//                 default:
//                     return "";
//             }
//         };

//         const className = getClassName();
//         return (
//             <div>
//                 {
//                     UptoDateCovidData && 
//                         UptoDateCovidData.map((infor) => {
//                             const {type, title, count} = infor;
//                             return (
//                                 <Col sm={24} md={8}>
//                                     <div className="DataInfor" style={{borderTop: `4px solid ${className}`}}>
//                                         <p style={{fontSize: "1.1rem", fontWeight: "500"}}> {title} </p>
//                                         <p style={{color: "red", fontWeight: "bolder", fontSize: "1.5rem"}}>{count}</p>
//                                     </div>
//                                 </Col>

//                             )
//                         })
//                 }
//             </div>
            
            
           
//         )
//     }
// }
