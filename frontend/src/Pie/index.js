/* Modules */
import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const d = [
    {
      "id": "erlang",
      "label": "erlang",
      "value": 444,
      "color": "hsl(73, 70%, 50%)"
    },
    {
      "id": "hack",
      "label": "hack",
      "value": 390,
      "color": "hsl(231, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 176,
      "color": "hsl(230, 70%, 50%)"
    },
    {
      "id": "javascript",
      "label": "javascript",
      "value": 383,
      "color": "hsl(223, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 158,
      "color": "hsl(114, 70%, 50%)"
    }
  ];

const Pie = () => {
    return (
        <ResponsivePie data={d} width={400} height={300} />
    );
}

export default Pie;