/* Modules */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const InstallsByCategory = ({ data }) => {
    return (
        <ResponsiveBar 
            data={data} 
            indexBy="label"
            margin={{
                "top": 10,
                "right": 130,
                "bottom": 140,
                "left": 150
            }}
            colorBy="value"
            enableLabel={false}
            enableGridX
            axisLeft={{
                "legend": "installations",
                "legendPosition": "middle",
                "legendOffset": -90
            }}
            axisBottom={{
                "tickRotation": 50
            }}
            // layout='horizontal'
            legends={[]}
            labelTextColor={{
                "from": "color",
                "modifiers": [
                    [
                        "darker",
                        "2"
                    ]
                ]
            }}
        />
    );
}

export default InstallsByCategory;