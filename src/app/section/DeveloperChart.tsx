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
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`${label}`}</p>
          <p className="text-blue-600">{`Commits: ${data.commits}`}</p>
          <p className="text-gray-600">{`Areas: ${data.areas.join(', ')}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Wrapper>
    <div id="dashboard" className="z-10">
      <h1 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Developer Contribution Dashboard
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
          <XAxis 
            dataKey="developer" 
            stroke="#180cf0ff" 
            angle={-45}
            textAnchor="end"
            height={100}
            interval={0}
            fontSize={20}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="commits" fill="#180cf0ff" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </Wrapper>
  );
}
