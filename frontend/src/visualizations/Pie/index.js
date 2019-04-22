/* Modules */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const Pie = ({ data }) => {
    return (
        <ResponsivePie 
          data={data} 
          margin={{
            "top": 40,
            "right": 80,
            "bottom": 80,
            "left": 80
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colorBy="label"
            radialLabel="label"
            borderWidth={1}
            borderColor="inherit:darker(0.2)"
            radialLabelsSkipAngle={13}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="inherit"
            slicesLabelsSkipAngle={13}
            slicesLabelsTextColor="#333333"
            motionStiffness={90}
            motionDamping={15}
        />
    );
}

export default Pie;