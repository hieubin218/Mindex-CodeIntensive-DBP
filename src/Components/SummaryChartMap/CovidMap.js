import React, {useEffect, useState, useRef} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Sử dụng 2 map trong HighChartReact 
import highchartsMap from "highcharts/modules/map";
import {cloneDeep} from "lodash";

// Use Map in HighChartReact (load highcharts modules)
highchartsMap(Highcharts);


// "options" of <HighCartReact>
const initOptions = {
    chart: {
        height: 400,
    },
    title: {
        text: "Confirmed Cases by Country",
    },

    // di chuyển bên trong Map zoom in/out and move up/down
    mapNavigation: {
        enabled: true,
    },
    colorAxis: {
        // min color value is 0
        min: 0,
        // color value range from 0 to [n] has a specific color 
        stops: [
            [0.2, "#FFC4AA"],
            [0.4, "#FF8A66"],
            [0.6, "#FF392B"],
            [0.8, "#B71525"],
            [1, "#7A0826"],
        ],
    },
    legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "bottom",
    },

    series: [
        {
            // Map hoạt động và dữ liệu lấy từ map-collection trong package.json 
            mapData: {},
            name: "Positive Cases",
            joinBy: ["hc-key", "key"],
        },
    ],
};

// props mapData: bao gồm thông tin về các tỉnh của country đó trong mục features 1
// mapData {..., features[{}{}],...}
function CovidMap({mapData}) {
    const [options, setOptions] = useState({});
    // default value is null
    const chartRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);



   

    // update Options when mapData is changed to other country
    // when mapData is changed, just update mapData: {} in series at line 47
    useEffect( () => {
        if (mapData && Object.keys(mapData).length) {
            // fetch Data
            const fakeData = mapData.features.map( (province, index) => ({
                // Get kc-key[province code] from feature
                key: province.properties['hc-key'],
    
                // where can save covid data per province in country 
                value: index,
            }));
        
            setOptions({
                ...initOptions,
                // series[0] is the first object in the array list 
                series: [
                    {
                        ...initOptions.series[0],
                        mapData: mapData, // <-- right side is a prop from parents Compt 
                        data: fakeData,
                    }
                ]
            });

            if(!isLoading) {
                setIsLoading(true);
            }
        }
    }, [mapData]);


    
    useEffect(() => {
        if (chartRef && chartRef.current) {
            chartRef.current.chart.series[0].update({
                mapData,
            });
        }
    }, [mapData, options]);


    if (!isLoading) return null;

    return (
        // HighChart làm thay đổi options object được truyền vào <-- cause undefined ở series 
        // cloneDeep --> copy and create new Objects for Options --> Options wont be modified by HighCharts
        <HighchartsReact  highcharts={Highcharts} options={cloneDeep(options)}
                          constructorType="mapChart"
                          ref={chartRef}>
        </HighchartsReact>
    )
}

export default React.memo(CovidMap);