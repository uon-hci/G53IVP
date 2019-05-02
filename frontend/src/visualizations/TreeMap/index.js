/* Modules */
import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";

const TreeMap = ({ data }) => (
  <ResponsiveTreeMap
    root={data.root}
    identity="name"
    value="loc"
    innerPadding={3}
    outerPadding={3}
    margin={{
      top: 10,
      right: 10,
      bottom: 30,
      left: 10
    }}
    label="loc"
    labelFormat=".0s"
    labelSkipSize={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.2]]
    }}
    colors={{
      scheme: "set3"
    }}
    colorBy="name"
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.3]]
    }}
    animate={true}
    motionStiffness={90}
    motionDamping={11}
  />
);

export default TreeMap;
