import React, { useState, useEffect } from 'react';
import LineChart from './LineChart';
//import lineData from './data.json'
import CSS from 'csstype';

const chartHeight: CSS.Properties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    position: 'absolute',
    height: '500px',
    width: '500px',
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
};

const NumberCounter = () => {
    let [value, setValue] = useState(0);
    let [counter, setCounter] = useState(0);
    let [xyArrary, setArray] = useState([{ x: 0, y: 0 }]);
    let customLineData =[{ "data": xyArrary }];

    useEffect(() => {
        //lineData += 
        alert("useeffect called");
        xyArrary.push({x:counter, y:value});
        customLineData = [{ "data": xyArrary }];
        LineChart(customLineData);        
        console.log(value);
    })


    const handleChange = (event: any) => {
        setValue(event.target.valueAsNumber);
        console.log(event.target.value);
    }

    const incrementValue = () => {
        alert("incremnet called");
        setCounter((prevVal) => prevVal + 1)
        setValue((prevVal) => prevVal + 1)
        //setValue(value+1);
        // console.log(value);
    }

    const decrementValue = () => {
        alert("decerement called");
        setValue((prevVal) => prevVal - 1)
        setCounter((prevVal) => prevVal + 1)
        //setValue(value-1);
        // console.log(value);
    }

    return (
        <div>
            <div>

                <input type="number" id="numCount" value={value} onChange={handleChange} />
            </div>

            <div>
                <button id="btnUp" value="Up" onClick={() => incrementValue()}> Up</button>
                <button id="btnDown" value="Down" onClick={() => decrementValue()}>Down</button>

            </div>
            <div style={chartHeight}>
                {/* {LineChart(lineData)} */}
                {LineChart(customLineData)}
                {/* <LineChart/> */}
            </div>
        </div>
    );


}

export default NumberCounter;