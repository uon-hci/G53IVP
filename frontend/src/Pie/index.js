/* Modules */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const d = [
    {
      "id": "apps-free",
      "label": "Free",
      "value": 2000000,
      "color": "hsl(73, 70%, 50%)"
    },
    {
      "id": "apps-paid",
      "label": "Paid",
      "value": 130000,
      "color": "hsl(231, 70%, 50%)"
    }
  ];

const Pie = () => {
    return (
        <ResponsivePie data={d} width={200} height={200} />
    );
}

export default Pie;