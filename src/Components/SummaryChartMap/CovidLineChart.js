import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import React, {useState, useEffect} from "react";
import {Button, ButtonGroup} from "@material-ui/core";


// Moment Library: Tạo format ngày tháng năm 
import moment from "moment";




const generatedOptions = (countryData) => {
    // for x-axis about date by fetching data from selected API
        // moment of (Data) and formats with date type 
    const categories = countryData.map((itemCovidDate) => moment(itemCovidDate.Date).format("DD/MM/YYYY"));


    return {
        // Height of line chart
        chart: {
            height: 400,
        },
        // Title of Line Chart
        title: {
            text: "Total Confirmed Cases",
        },
        // Horizontal line -> for date by date
        xAxis: {
            categories: categories,
            crosshair: true,
        },
        // color of line 
        colors: ["#DC143C"],
        // Vertical Line -> null
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
            labels: {
                align: "right",
            },
        },
        // cấu hình nội dung của line chart tại từng thời điểm on line (date, total cases)
        tooltip: {
            headerFormat: '<span style="font-size:10px"> {point.key} </span>  <table>',
            pointFormat:
                '<tr> <td style="color:{series.color};padding:0"> {series.name}: </td>' +
                '<td style="padding:0"> <b> {point.y} ca </b> </td> </tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
            },
        },

        series: [
            {
                name: "Total Confirmed Cases",
                data: countryData.map((item) => item.Confirmed),
            },
        ],
    };
};


// data props from component cha
// when data modify, run again generateOptions --> to generate new option
function CovidLineChart({countryData}) {
    const [options, setOptions] = useState({});

    // Lưu trữ data của user khi click vào button nào của Date 
    const [selectedChartDate, setSelectedChartDate] = useState("all");

    // "data" in dependency --> when "data" change, useEffect will also change with new "data";
    useEffect(() => {

        // Check the change of covid date scope in selectedChartDate
        let selectedDateScope = [];
        switch(selectedChartDate) {
            case "all":
                selectedDateScope = countryData;
                break;
            case "month":
                selectedDateScope = countryData.slice(countryData.length - 30);
                break;
            case "week":
                selectedDateScope = countryData.slice(countryData.length - 7);
                break;
            default:
                selectedDateScope = countryData;
                break;
        }

        setOptions(generatedOptions(selectedDateScope));

        // when selectedChartDate (dependency) is change, the useEffect will run again 
    }, [countryData, selectedChartDate])


    return (
        // <ButtonGroup> để xem covid dữ liệu trong 7 ngày, 30 ngày, 1 tháng,...
        // <ButtonGroup> flex-end để move text qua max bên phải 
        // set up color when button clicked --> color: default color state 
        <div>
            <ButtonGroup size="small" 
                         style={{display: "flex",
                                 justifyContent: "flex-end"}}>
                
                <Button color={selectedChartDate === "week" ? "secondary" : ""}
                        onClick={() => setSelectedChartDate("week")}> 
                        1 Week 
                </Button>
                <Button color={selectedChartDate === "month" ? "secondary" : ""}
                        onClick={() => setSelectedChartDate("month")}> 
                        1 Month
                </Button>
                <Button color= {selectedChartDate === "all" ? "secondary" : ""}
                        onClick={() => setSelectedChartDate("all")}> 
                        All 
                </Button>
            </ButtonGroup>

            <HighchartsReact highcharts={Highchart}
                             options={options}>

            </HighchartsReact>
           

        </div>
    )
};

// When no change in props --> this Component will not render that get from memory
export default React.memo(CovidLineChart);

/** NOTE:
 * <HighchartsReact option={}> 
 * --> dữ liệu option sẽ bị thay đổi về country khác --> phải tạo lại một option mới về country mới 
 */