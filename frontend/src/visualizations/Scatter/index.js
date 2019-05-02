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
                "scheme": axis.color || "red_yellow_green"
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
                "max": axis.xmax
            }}
            yScale={{
                "type": "linear",
                "min": axis.ymin,
                "max": "auto"
            }}
            axisLeft={{
                "orient": "left",
                "tickSize": 15,
                "tickPadding": 10,
                "tickRotation": 0,
                "legend": 'ratings',
                "legendPosition": "middle",
                "legendOffset": -60
            }}
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": axis.title,
                "legendPosition": "middle",
                "legendOffset": 46
            }}
    
            legends={[]}
        />
    );
}

export default Scatter;