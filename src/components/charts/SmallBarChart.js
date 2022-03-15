import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

//dat and jsx for a bar chart
const data = [
  {
    name: 'Year 1',
    checkings: 4000,
    savings: 2400,
    amt: 2400,
  },
  {
    name: 'Year 2',
    checkings: 3000,
    savings: 1398,
    amt: 2210,
  },
  {
    name: 'Year 3',
    checkings: 2000,
    savings: 9800,
    amt: 2290,
  },
  {
    name: 'Year 4',
    checkings: 2780,
    savings: 3908,
    amt: 2000,
  },
  {
    name: 'Year 5',
    checkings: 1890,
    savings: 4800,
    amt: 2181,
  },
  {
    name: 'Year 6',
    checkings: 2390,
    savings: 3800,
    amt: 2500,
  },
  {
    name: 'Year 7',
    checkings: 3490,
    savings: 4300,
    amt: 2100,
  },
];

const SmallBarChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Months" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="checkings" fill="#8884d8" />
      <Bar dataKey="savings" fill="#82ca9d" />
    </BarChart>
  );
}

export default SmallBarChart