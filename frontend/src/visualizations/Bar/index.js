/* Modules */
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const Bar = ({ data }) => {
    return (
        <ResponsiveBar 
            data={data} 
            indexBy="label"
            margin={{
                "top": 50,
                "right": 130,
                "bottom": 50,
                "left": 60
            }}
        />
    );
}

export default Bar;