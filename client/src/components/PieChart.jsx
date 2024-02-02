import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

function PieChartdta() {
  const [pieData, setPieData] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  //fetch piechart data
  useEffect(() => {
    const fetchPiechartData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/pie-chart");
        const data = await res.json();
        setPieData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPiechartData();
  }, []);

  return (
    <div className="flex flex-col justify-center bg-white rounded-lg shadow-lg p-4 px-6">
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div>
        {pieData &&
          pieData.map((dta) => (
            <div className="flex gap-2 items-center" key={dta.label}>
              {dta.label}
            </div>
          ))}
      </div>
    </div>
  );
}
export default PieChartdta;
