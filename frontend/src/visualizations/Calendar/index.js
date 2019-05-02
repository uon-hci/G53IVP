/* Modules */
import React from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

const Calendar = ({ data }) => (
    <ResponsiveCalendar
        data={data}
        from="2014-01-01"
        to="2018-08-31"
        emptyColor="#eeeeee"
        colors={[
            "#97e3d5",
            "#61cdbb",
            "#e8c1a0",
            "#f47560",
            "#f93f20"
        ]}
        minValue={1}
        margin={{
            "top": 40,
            "right": 40,
            "bottom": 60,
            "left": 40
        }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                "anchor": "bottom",
                "direction": "row",
                "translateY": 36,
                "itemCount": 4,
                "itemWidth": 42,
                "itemHeight": 10,
                "itemsSpacing": 14,
                "itemDirection": "right-to-left"
            }
        ]}
    />
)

export default Calendar;