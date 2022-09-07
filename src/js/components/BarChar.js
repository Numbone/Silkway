import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  const data = [
    {
      name: "Январь",
      uv: 45000
    },
    {
        name: "Февраль",
        uv: 79000 
      },
      {
        name: "Март",
        uv: 76000 
      },
      {
        name: "Апрель",
        uv: 42000 
      },
      {
        name: "Май",
        uv: 81000 
      },
      {
        name: "Июнь",
        uv: 47000 
      },
      {
        name: "Июль",
        uv: 67000 
      },
      {
        name: "Август",
        uv: 87000 
      },
      {
        name: "Сентябрь",
        uv: 62000 
      },
      {
        name: "Октябрь",
        uv: 68000 
      },
      {
        name: "Ноябрь",
        uv: 120000 
      },
      {
        name: "Декабрь",
        uv: 81000 
      },
     

  ];
const BarChar = () => {
  return (
    <div>
        <BarChart
      width={1200}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 135,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
    {/* <Legend /> */}
      <Bar dataKey="uv" fill="#33C9DD" />
    </BarChart>
    </div>
  )
}

export default BarChar