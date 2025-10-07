
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const employeeGrowthData = [
  { month: "Jan", employees: 850 },
  { month: "Feb", employees: 920 },
  { month: "Mar", employees: 1050 },
  { month: "Apr", employees: 1100 },
  { month: "May", employees: 1180 },
  { month: "Jun", employees: 1234 },
];

const departmentData = [
  { department: "Engineering", count: 450 },
  { department: "Sales", count: 280 },
  { department: "Marketing", count: 180 },
  { department: "HR", count: 120 },
  { department: "Operations", count: 204 },
];

const performanceData = [
  { name: "Excellent", value: 35, color: "#22c55e" },
  { name: "Good", value: 45, color: "#3b82f6" },
  { name: "Average", value: 15, color: "#f59e0b" },
  { name: "Needs Improvement", value: 5, color: "#ef4444" },
];

const attendanceData = [
  { day: "Mon", present: 1180, absent: 54 },
  { day: "Tue", present: 1190, absent: 44 },
  { day: "Wed", present: 1200, absent: 34 },
  { day: "Thu", present: 1175, absent: 59 },
  { day: "Fri", present: 1150, absent: 84 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Employee Growth Chart */}
      <Card className="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Employee Growth</CardTitle>
          <CardDescription>Monthly employee count trend</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={employeeGrowthData}>
              <defs>
                <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Area
                type="monotone"
                dataKey="employees"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorEmployees)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Department Distribution */}
      <Card className="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Department Distribution</CardTitle>
          <CardDescription>Employees by department</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="department" className="text-xs" angle={-45} textAnchor="end" height={80} />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Performance Distribution */}
      <Card className="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Performance Distribution</CardTitle>
          <CardDescription>Employee performance ratings</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Attendance Tracking */}
      <Card className="col-span-2 lg:col-span-1">
        <CardHeader>
          <CardTitle>Weekly Attendance</CardTitle>
          <CardDescription>Present vs. Absent this week</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="day" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  borderColor: 'hsl(var(--border))' 
                }} 
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="present"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="absent"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
