// components/ChartLine.jsx
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const dummyData = {
  "University A": [
    { year: 2015, enrollment: 12000, inscription: 12000 },
    { year: 2016, enrollment: 12500, inscription: 12500 },
    { year: 2017, enrollment: 12300, inscription: 12300 },
    { year: 2018, enrollment: 13000, inscription: 13000 },
    { year: 2019, enrollment: 13800, inscription: 13800 },
    { year: 2020, enrollment: 14000, inscription: 14000 },
    { year: 2021, enrollment: 14500, inscription: 14500 },
    { year: 2022, enrollment: 14300, inscription: 14300 },
    { year: 2023, enrollment: 14750, inscription: 14750 },
  ],
  "University B": [
    { year: 2015, enrollment: 10000, inscription: 10000 },
    { year: 2016, enrollment: 10500, inscription: 10500 },
    { year: 2017, enrollment: 10800, inscription: 10800 },
    { year: 2018, enrollment: 11100, inscription: 11100 },
    { year: 2019, enrollment: 12000, inscription: 12000 },
    { year: 2020, enrollment: 12500, inscription: 12500 },
    { year: 2021, enrollment: 12700, inscription: 12700 },
    { year: 2022, enrollment: 12900, inscription: 12900 },
    { year: 2023, enrollment: 13100, inscription: 13100 },
  ],
};

export function ChartLine({ t, language}) {
  const [selected, setSelected] = useState("University A");

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">{t.enrollmentTrendTitle}</h2>
      <label className="block mb-2">
        {t.selectUniversity}:
        <select
          className="ml-2 p-1 border rounded"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {Object.keys(dummyData).map((uni) => (
            <option key={uni}>{uni}</option>
          ))}
        </select>
      </label>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dummyData[selected]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip formatter={(value) => new Intl.NumberFormat().format(value)} />
          <Line type="monotone" dataKey={language === "fr" ? "inscription" : "enrollment"} stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
