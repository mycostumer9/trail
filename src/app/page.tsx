
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { DashboardCharts } from "~/components/dashboard-charts";

export default function HomePage() {
  const stats = [
    { title: "Total Employees", value: "1,234", change: "+12%", changeType: "positive" },
    { title: "Active Projects", value: "48", change: "+5%", changeType: "positive" },
    { title: "Pending Requests", value: "23", change: "-8%", changeType: "negative" },
    { title: "Performance Score", value: "94%", change: "+3%", changeType: "positive" },
  ];

  const recentActivity = [
    { employee: "Sarah Johnson", action: "Submitted leave request", time: "2 hours ago" },
    { employee: "Mike Chen", action: "Updated profile", time: "4 hours ago" },
    { employee: "Emily Davis", action: "Completed training", time: "5 hours ago" },
    { employee: "James Wilson", action: "New hire onboarding", time: "1 day ago" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            HR Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your team today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardDescription>{stat.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-between">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className={`text-sm font-medium ${
                    stat.changeType === "positive" 
                      ? "text-green-600 dark:text-green-400" 
                      : "text-red-600 dark:text-red-400"
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <DashboardCharts />

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead className="text-right">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{activity.employee}</TableCell>
                    <TableCell>{activity.action}</TableCell>
                    <TableCell className="text-right text-muted-foreground">
                      {activity.time}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
