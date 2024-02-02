import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function LineChartdta() {
  const [lineChartData, setLineChartData] = useState([]);

  //fetch data
  useEffect(() => {
    const getLineChartData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/graph");
        const data = await res.json();
        setLineChartData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getLineChartData();
  }, []);
  //   console.log(lineChartData);

  return (
    <div className="bg-white max-w-3xl p-2 rounded-lg shadow-md">
      <LineChart
        width={700}
        height={300}
        data={lineChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"x"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="y" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}
export default LineChartdta;
