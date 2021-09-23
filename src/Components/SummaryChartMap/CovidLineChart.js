import HighchartsReact from "highcharts-react-official";
import React, {useState, useEffect} from "react";
import Highchart from "highcharts";


const generatedOptions = (data) => {
    const categories = [];
    return {
        // Height of line chart
        chart: {
            height: 500,
        },
        // Title of Line Chart
        title: {
            text: "Total Confirmed Cases",
        },
        // Horizontal line -> for date by date
        xAis: {
            categories: categories,
            crosshair: true,
        },
        // color of line 
        colors: ["#53585B"],
        // Vertical Line -> null
        yAxis: {
            min: 0,
            title: {
                text: null,
            },
        },
        // cấu hình nội dung của line chart tại từng thời điểm on line (date, total cases)
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span>',
            pointFormat:
                '<tr> <td></td>' +
                '<td></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
        },
        // Quan trọng: Dữ liệu để truyền trên Line Chart 
        // series: [
        //     {
        //         name: "Total Cases",
        //         data: data.map((item) => item.Confirmed),
        //     },
        // ]

    }

}


// data props from component cha
// when data modify, run again generateOptions --> to generate new option
function CovidLineChart({data}) {
    const [options, setOptions] = useState({});

    // "data" in dependency --> when "data" change, useEffect will also change with new "data";
    useEffect(() => {
        setOptions(generatedOptions(data));
    }, [data])


    return (
        <div>
            <HighchartsReact highcharts={Highchart}
                             options={{options}}>

            </HighchartsReact>
           

        </div>
    )
};

export default CovidLineChart;

/** NOTE:
 * <HighchartsReact option={}> 
 * --> dữ liệu option sẽ bị thay đổi về country khác --> phải tạo lại một option mới về country mới 
 */