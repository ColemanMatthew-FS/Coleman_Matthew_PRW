import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

//data and jsx for a scatter plot
const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];
  
const ScattChart = () => {
  return (
      <ScatterChart
      width={400}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="days" unit="days" />
        <YAxis type="number" dataKey="y" name="money" unit="$" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Money saved" data={data} fill="#8884d8" />
      </ScatterChart>
  )
}

export default ScattChart