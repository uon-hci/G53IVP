/* Modules */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const InstallsByCategory = ({ data, axis }) => {
    return (
        <ResponsiveBar 
            data={data} 
            indexBy="label"
            margin={{
                "top": 0,
                "right": 130,
                "bottom": 80,
                "left": 150
            }}
            colorBy="value"
            enableLabel={false}
            enableGridX
            axisBottom={{
                "legend": "installations",
                "legendPosition": "middle",
                "legendOffset": 50
            }}
            layout='horizontal'
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