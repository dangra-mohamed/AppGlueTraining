//import React from 'react';
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


    // console.log(data);
    // const LineChart = () => {
const LineChart = (data: any) => (
        //return(
            
        <ResponsiveLine
        data={data}
      margin={{
        top: 0,
        right: 50,
        bottom: 50,
        left: 50
      }}
      yScale={{
        type: "linear",
        stacked: false
      }}
      xScale={{
        type: "linear",
      }}
    //   axisBottom={{
    //     format: "%b %d"
    //   }}
    />

        );
    //}

export default LineChart;
