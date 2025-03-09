import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CalendarDays, Syringe, AlertTriangle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserRoleChart } from "./charts/user-role-chart"
import { AppointmentChart } from "./charts/appointment-chart"
import { RevenueChart } from "./charts/revenue-chart"
import { VaccinationAgeChart } from "./charts/age-group-chart"
import { ReactionsChart } from "./charts/reaction-chart"

// Sample staff performance data
const staffPerformance = [
  {
    name: "Dr. Sarah Johnson",
    role: "Physician",
    avatar: "/placeholder.svg?height=40&width=40",
    appointmentsCompleted: 45,
    appointmentsTarget: 50,
    vaccinesAdministered: 120,
    patientSatisfaction: 98,
  },
  {
    name: "Nurse Michael Chen",
    role: "Registered Nurse",
    avatar: "/placeholder.svg?height=40&width=40",
    appointmentsCompleted: 38,
    appointmentsTarget: 40,
    vaccinesAdministered: 95,
    patientSatisfaction: 96,
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Pediatrician",
    avatar: "/placeholder.svg?height=40&width=40",
    appointmentsCompleted: 42,
    appointmentsTarget: 45,
    vaccinesAdministered: 110,
    patientSatisfaction: 99,
  },
]

export function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+10% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vaccines Administered</CardTitle>
            <Syringe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,721</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">Next 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Adverse Reactions</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This month (0.14% rate)</p>
          </CardContent>
        </Card>
      </div>

      {/* Coverage and Demographics Section */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <VaccinationAgeChart />
        <UserRoleChart />
      </div>

      {/* Trends Section */}
      <div className="grid gap-6 mb-8 md:grid-cols-1">
        <ReactionsChart />
        <RevenueChart />
        <AppointmentChart />
      </div>

      {/* Staff Section */}
      <Card className="mt-8">
      <CardHeader>
        <CardTitle>Staff Performance</CardTitle>
        <CardDescription>Weekly performance metrics for top staff members</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {staffPerformance.map((staff) => (
            <div key={staff.name} className="space-y-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={staff.avatar} alt={staff.name} />
                  <AvatarFallback>
                    {staff.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{staff.name}</h4>
                  <p className="text-sm text-muted-foreground">{staff.role}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-sm font-medium">
                    {staff.appointmentsCompleted}/{staff.appointmentsTarget} Appointments
                  </p>
                  <p className="text-xs text-muted-foreground">{staff.vaccinesAdministered} Vaccines Administered</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Appointments Target</span>
                  <span>{Math.round((staff.appointmentsCompleted / staff.appointmentsTarget) * 100)}%</span>
                </div>
                <Progress value={(staff.appointmentsCompleted / staff.appointmentsTarget) * 100} className="h-1" />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Patient Satisfaction</span>
                  <span>{staff.patientSatisfaction}%</span>
                </div>
                <Progress value={staff.patientSatisfaction} className="h-1" indicatorClassName="bg-green-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>

      {/* Recent Vaccinations Table */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Recent Vaccinations</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient ID</TableHead>
                <TableHead>Patient Name</TableHead>
                <TableHead>Vaccine</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Administered By</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>P-12345</TableCell>
                <TableCell>John Smith</TableCell>
                <TableCell>Influenza</TableCell>
                <TableCell>2023-11-28</TableCell>
                <TableCell>Dr. Sarah Johnson</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>P-12346</TableCell>
                <TableCell>Emma Davis</TableCell>
                <TableCell>COVID-19 Booster</TableCell>
                <TableCell>2023-11-28</TableCell>
                <TableCell>Nurse Michael Chen</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400">
                    Completed
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>P-12347</TableCell>
                <TableCell>Sophia Martinez</TableCell>
                <TableCell>HPV</TableCell>
                <TableCell>2023-11-27</TableCell>
                <TableCell>Dr. Emily Rodriguez</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400">
                    Follow-up Scheduled
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>P-12348</TableCell>
                <TableCell>James Wilson</TableCell>
                <TableCell>Tetanus</TableCell>
                <TableCell>2023-11-27</TableCell>
                <TableCell>Nurse Michael Chen</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400">
                    Mild Reaction
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


