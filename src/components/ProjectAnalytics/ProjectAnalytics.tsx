"use client";

import { DataPoint } from "@/types/common.types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data: DataPoint[] = [
  { month: "Aug", total: 4, completed: 3 },
  { month: "Sep", total: 5, completed: 4 },
  { month: "Oct", total: 7, completed: 6 },
  { month: "Nov", total: 8, completed: 7 },
  { month: "Dec", total: 7, completed: 6 },
  { month: "Jan", total: 9, completed: 8 },
  { month: "Feb", total: 11, completed: 10 },
  { month: "Mar", total: 15, completed: 1 },
];

export default function ProjectAnalytics() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 30 }}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#3b5bdb"
          strokeWidth={1}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="completed"
          stroke="#10b981"
          strokeWidth={1}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
