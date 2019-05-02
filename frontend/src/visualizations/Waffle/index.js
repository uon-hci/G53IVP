/* Modules */
import React from "react";
import { ResponsiveWaffle } from "@nivo/waffle";
import palette from "google-palette";

let seq = null;

const CustomCell = ({
  position,
  size,
  x,
  y,
  color,
  fill,
  opacity,
  borderWidth,
  borderColor,
  data,
  onHover,
  onLeave,
  onClick
}) => {
  return (
    <rect
      x={x}
      y={y}
      width={size}
      height={size}
      fill={(data && "#" + seq[data.groupIndex]) || fill || color}
      strokeWidth={borderWidth}
      stroke={borderColor}
      opacity={opacity}
      onMouseEnter={onHover}
      onMouseMove={onHover}
      onMouseLeave={onLeave}
      onClick={event => {
        onClick({ position, color, x, y, data }, event);
      }}
    />
  );
};

const Waffle = ({ data }) => {
  seq = palette("tol-rainbow", data.length).reverse();
  return (
    <ResponsiveWaffle
      data={data}
      total={8650}
      rows={20}
      columns={60}
      fillDirection="left"
      margin={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }}
      cellComponent={CustomCell}
      borderWidth="0px"
      borderColor="#555555"
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      legends={[]}
    />
  );
};

export default Waffle;
