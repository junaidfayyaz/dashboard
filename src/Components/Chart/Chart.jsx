import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./Chart.css"
const Chart = () => {

    const data = [
      {
        name: "Jan",
        "Active User": 4000,
      },
      {
        name: "Feb",
        "Active User": 3000,
      },
      {
        name: "Mar",
        "Active User": 4000,
      },
      {
        name: "Apr",
        "Active User": 2000,
      },
      {
        name: "May",
        "Active User": 4000,
      },
      {
        name: "June",
        "Active User": 1000,
      },
      {
        name: "July",
        "Active User": 4000,
      },
      {
        name: "Aug",
        "Active User": 3000,
      },
      {
        name: "Sep",
        "Active User": 4000,
      },
      {
        name: "Oct",
        "Active User": 2000,
      },
      {
        name: "Nov",
        "Active User": 4000,
      },
      {
        name: "Dec",
        "Active User": 5000,
      },
    ];


  return (
    <div className="chart">
      <h3 className="charttitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotons" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke='#e0dfdf' />
          <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart