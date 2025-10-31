"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Wrapper from "../shared/wrapper";

interface DeveloperData {
  developer: string;
  commits: number;
  areas: string[];
}

interface DeveloperChartProps {
  data: DeveloperData[];
}

export default function DeveloperChart({ data }: DeveloperChartProps) {
  const formatDeveloperName = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 1) return name;
    
    if (name.length > 12) {
      return `${parts[0]} ${parts[parts.length - 1][0]}.`;
    }
    return name;
  };

  const chartData = data.map(item => ({
    ...item,
    displayName: formatDeveloperName(item.developer),
    developer: item.developer
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-xl">
          <p className="font-bold text-gray-800 text-lg">{`${data.developer}`}</p>
          <p className="text-blue-600 font-semibold">{`Commits: ${data.commits}`}</p>
          <p className="text-gray-600">{`Expertise: ${data.areas.join(', ')}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Wrapper>
    <div id="dashboard" className="relative z-10 min-h-screen p-4 sm:p-6">
      <div className="text-center mb-8 sm:mb-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
        Developer Contribution Dashboard
      </h1>
      </div>
      <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg overflow-hidden">
      <ResponsiveContainer width="100%" height={300} className="sm:!h-80 lg:!h-96">
        <BarChart data={chartData} margin={{ top: 20, right: 10, left: 10, bottom: 50 }}>
          <XAxis 
            dataKey="displayName" 
            stroke="#374151" 
            angle={0}
            textAnchor="middle"
            height={50}
            interval={0}
            fontSize={10}
            fontWeight="500"
            tick={{ fill: '#374151', fontSize: 10 }}
            className="sm:text-xs"
          />
          <YAxis 
            stroke="#374151"
            fontSize={10}
            tick={{ fill: '#374151', fontSize: 10 }}
            className="sm:text-xs"
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="commits" 
            fill="#2563eb" 
            radius={[4, 4, 0, 0]}
            stroke="#1d4ed8"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
    </Wrapper>
  );
}
