/* Modules */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const FreePaidByCategory = ({ data }) => {
    return (
        <ResponsiveBar
            data={data}
            reverse
            indexBy="label"
            keys={[
                'free',
                'paid'
            ]}
            colors={{
                "scheme": "paired"
            }}
            defs={[
                {
                    "id": "dots",
                    "type": "patternDots",
                    "background": "inherit",
                    "color": "rgba(0, 0, 0, 0.2)",
                    "size": 2,
                    "padding": 1,
                    "stagger": true
                },
                {
                    "id": "lines",
                    "type": "patternLines",
                    "background": "inherit",
                    "color": "rgba(0, 0, 0, 0.1)",
                    "rotation": -45,
                    "lineWidth": 3,
                    "spacing": 10
                }
            ]}
            fill={[
                {
                    "match": {
                        "id": "free"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "paid"
                    },
                    "id": "lines"
                }
            ]}
            margin={{
                "top": 0,
                "right": 130,
                "bottom": 80,
                "left": 150
            }}
            padding={0.2}
            enableGridX
            axisBottom={{
                "legend": "Percentage %",
                "legendPosition": "middle",
                "legendOffset": 50
            }}
            enableLabel={false}
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

export default FreePaidByCategory;