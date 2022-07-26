import React from "react";
import {
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
} from "recharts";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

const App = () => {
  return (
    <div>
      <h1 className="chart-heading">Line Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 100, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            tickFormatter={(value) => {
              return value + "Programming";
            }}
          />
          <YAxis dataKey="" />
          <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="red"
            activeDot={{ r: 8 }}
          />
          <Legend />
          <Line dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default App;
