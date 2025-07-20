// components/ChartBar.jsx
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dummyDataByYear = {
  2021: [
    { university: "University A", enrollment: 14500, inscription: 14500 },
    { university: "University B", enrollment: 12700, inscription: 12700 },
    { university: "University C", enrollment: 11000, inscription: 11000 },
  ],
  2022: [
    { university: "University A", enrollment: 14300, inscription: 14300 },
    { university: "University B", enrollment: 12900, inscription: 12900 },
    { university: "University C", enrollment: 11300, inscription: 11300 },
  ],
  2023: [
    { university: "University A", enrollment: 14750, inscription: 14750 },
    { university: "University B", enrollment: 13100, inscription: 13100 },
    { university: "University C", enrollment: 11550, inscription: 11550 },
  ],
};

export function ChartBar({ t, language }) {
  const [year, setYear] = useState("2023");

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">{t.enrollmentComparisonTitle}</h2>
      <label className="block mb-2">
        {t.selectYear}:
        <select
          className="ml-2 p-1 border rounded"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {Object.keys(dummyDataByYear).map((yr) => (
            <option key={yr}>{yr}</option>
          ))}
        </select>
      </label>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dummyDataByYear[year]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="university" />
          <YAxis />
          <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
          <Bar dataKey={language === "fr" ? "inscription" : "enrollment"} fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
