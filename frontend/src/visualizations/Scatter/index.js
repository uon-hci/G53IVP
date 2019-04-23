/* Modules */
import React from 'react';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';

const Scatter = ({ data, axis }) => {
    return (
        <ResponsiveScatterPlot 
            isInteractive={false}
            symbolSize={10}
            data={data}
            colors={{
                "scheme": "red_yellow_green"
            }}
            margin={{
                "top": 20,
                "right": 80,
                "bottom": 80,
                "left": 90
            }}
            xScale={{
                "type": "linear",
                "min": 0,
                "max": 8000000
            }}
            yScale={{
                "type": "linear",
                "min": 4,
                "max": "auto"
            }}
            axisLeft={{
                "orient": "left",
                "tickSize": 15,
                "tickPadding": 10,
                "tickRotation": 0,
                "legend": "ratings",
                "legendPosition": "middle",
                "legendOffset": -60
            }}
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "reviews",
                "legendPosition": "middle",
                "legendOffset": 46
            }}
    
            legends={[]}
        />
    );
}

export default Scatter;