import React, {useState, useEffect} from 'react'
import "./CovidDashboard.css";
import CovidAPI from "../../Services/CovidAPI";



import CountriesDropBar from '../../Components/SelectedCountriesDropBar/CountriesDropBar';
import CovidCard from "../../Components/CovidCard/CovidCard";
import CountriesTotalCases from "../../Components/CountriesTotalCases/CountriesTotalCases";
import CovidChart from '../../Components/SummaryChartMap/PlatFormContainer';
import {Spin, Col, Row} from "antd";


// axios is a Promise -> use method Then to get data from API


const CovidDashboard = () => {
    // Set default state and default setState
    const [countries, setCountries] = useState([]);



    // Get data from API by React Hook (useEffect, and dependency [] + call the sub-function)
    useEffect( () => {
        const getAllCountries = async () => {
            const response = await CovidAPI.onFetchAllCountries();
            setCountries(response.data);
        };
        getAllCountries();
    }, [] );


    // 
    const onHandleSelectedCountry = (event) => {
        console.log(event)

        // call API
        // onGetReportCountry()

    }



    return (
       <>
        <CountriesDropBar countries={countries} onHandleSelectedCountry={onHandleSelectedCountry} />
        <CovidCard />
        <CovidChart />

       </>
    )
    



};

export default CovidDashboard;




// export default class CovidDashboard extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             isLoading: false,
//             countries: [],
//             SelectedCountryID: "vietnam",
//             countrySumaryData: [],

//         };
//     };

    
//     async componentDidMount() {
//         try {
//             this.setState({
//                 isLoading: true,
//             })
//             const response = await CovidAPI.onFetchAllCountries();
//             this.setState({
//                 countries: response.data,
//             });
//         } catch(error) {
//             throw(error);
//         }
//     }


//     onHandleSelectedCountry = () => {

        
//     }

//     UptoDateCovidData = (data) => {
//         if (data && data.length) {
//             const newestData = data[data.length -1];
//             return [
//                 {
//                     title: "Total Confirmed Cases",
//                     count: newestData.Confirmed,
//                     type: "confirmed",
//                 },
//                 {
//                     title: "Total Recovered Cases",
//                     count: newestData.Recovered,
//                     type: "recovered",
//                 },
//                 {
//                     title: "Total Death Cases",
//                     count: newestData.Deaths,
//                     type: "death",
//                 }
//             ];
//         }
//         return [];
//     }

//     render() {
//         const {isLoading, countries} = this.state;
//         return (
//             <div>
//                 {
//                     isLoading && (
//                         <div className="loading">
//                             <Spin size="large" />
//                             <p>Loading...Please Wait!</p>
//                         </div>
//                     )
//                 }

//                 <Row>
//                     <Col span={14}>
//                         <CountriesDropBar countries={countries} 
//                                     isLoading={isLoading} 
//                                     onHandleSelectedCountry={this.onHandleSelectedCountry} />
//                     </Col>
//                 </Row>

//                 <Row gutter={16}>
//                     <Col span={14}>
//                         <div className="box-wrapper mb-2">
//                             <Row gutter={16}>
//                                 {/* {
//                                     this.UptoDateCovidData &&
//                                         this.UptoDateCovidData.map((infor) => {
//                                             const {type, title, count} = infor;
//                                             return (<CovidCard type={type} title={title} count={count} />);
//                                         })
//                                 } */}
                                
//                                  <CovidCard />
//                             </Row>
//                         </div>
//                     </Col>



//                 </Row>
                

//                 <CovidChart />
//                 <CountriesTotalCases />
               
//             </div>
//         )
//     }
// }


