/* Modules */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Bar = ({ data, axis }) => {
    return (
        <ResponsiveBar 
            data={data} 
            indexBy="id"
            margin={{
                "top": 20,
                "right": 130,
                "bottom": 50,
                "left": 60
            }}
            colorBy="value"
            enableGridX
            axisLeft={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "count",
                "legendPosition": "middle",
                "legendOffset": -50
            }}
            axisBottom={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": axis || "discrete",
                "legendPosition": "middle",
                "legendOffset": 40
            }}
            legends={[
                {
                    "dataFrom": "indexes",
                    "anchor": "right",
                    "direction": "column",
                    "justify": false,
                    "translateX": 120,
                    "translateY": 0,
                    "itemsSpacing": 2,
                    "itemWidth": 100,
                    "itemHeight": 20,
                    "itemDirection": "left-to-right",
                    "itemOpacity": 0.85,
                    "symbolSize": 20,
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemOpacity": 1
                            }
                        }
                    ]
                }
            ]}
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

export default Bar;