'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Consultation', amount: 500 },
  { name: 'Medicines', amount: 200 },
  { name: 'Tests', amount: 300 },
  { name: 'Other', amount: 100 },
];

const pieData = [
  { name: 'Consultation', value: 500 },
  { name: 'Medicines', value: 200 },
  { name: 'Tests', value: 300 },
  { name: 'Other', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">📊 Expense Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Expense Breakdown</h2>
          <BarChart width={400} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Category Distribution</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Total Expenses: $1100</h2>
        <p>Suggestions: Consider generic medicines to save on costs.</p>
      </div>
    </div>
  )
}