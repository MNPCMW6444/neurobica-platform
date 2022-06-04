import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Chart(props) {
  let data = props.data;
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sample0" fill="#8884d8" />
        <Bar dataKey="sample1" fill="#8884d8" />
        <Bar dataKey="sample2" fill="#8884d8" />
        <Bar dataKey="sample3" fill="#8884d8" />
        <Bar dataKey="sample4" fill="#8884d8" />
        <Bar dataKey="sample5" fill="#8884d8" />
        <Bar dataKey="sample6" fill="#8884d8" />
        <Bar dataKey="sample7" fill="#8884d8" />
        <Bar dataKey="sample8" fill="#8884d8" />
        <Bar dataKey="sample9" fill="#8884d8" />
        <Bar dataKey="sample10" fill="#8884d8" />
        <Bar dataKey="sample11" fill="#8884d8" />
      </BarChart>
      {/*       </ResponsiveContainer>*/}
    </div>
  );
}
