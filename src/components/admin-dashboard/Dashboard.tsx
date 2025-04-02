import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CalendarDays, Syringe, DollarSign } from "lucide-react"
import { UserRoleChart, UserRoleDistribution } from "./charts/user-role-chart"
import { AppointmentByMonth, AppointmentChart } from "./charts/appointment-chart"
import { RevenueChart } from "./charts/revenue-chart"
import { useEffect, useState } from "react"
import { getAppointmentsByMonthAndStatus, getAppointmentsByStatus, getTop5MostBookedVaccines, getTotalAppointments, getTotalChildren, getTotalPaymentAmount, getTotalVaccines, getUserRolesDistribution } from "@/api/admin/dashboard"
import { AppointmentsByStatusChart, AppointmentStatusDistribution } from "./charts/appointments-by-status-chart"
import { VaccineBookingDto, VaccineMostBookedChart } from "./charts/vaccine-most-booked-chart"


export function AdminDashboard() {
  const [totalChildren, setTotalChildren] = useState<number | null>(null)
  const [totalVaccines, setTotalVaccines] = useState<number | null>(null)
  const [totalAppointments, setTotalAppointments] = useState<number | null>(null)
  const [totalPaymentAmount, setTotalPaymentAmount] = useState<number | null>(null)
  const [userRolesData, setUserRolesData] = useState<UserRoleDistribution[]>([])
  const [appointmentsByStatusData, setAppointmentsByStatusData] = useState<AppointmentStatusDistribution[]>([])
  const [appointmentsByMonthData, setAppointmentsByMonthData] = useState<AppointmentByMonth[]>([])
  const [top5Vaccines, setTop5Vaccines] = useState<VaccineBookingDto[]>([]);
  const [chartKey, setChartKey] = useState<string>(Date.now().toString())

  useEffect(() => {
    const fetchData = async () => {
      try {
        const childrenResponse = await getTotalChildren()
        if (childrenResponse.isSuccess) {
          setTotalChildren(childrenResponse.data)
        }

        const vaccinesResponse = await getTotalVaccines()
        if (vaccinesResponse.isSuccess) {
          setTotalVaccines(vaccinesResponse.data)
        }

        const appointmentsResponse = await getTotalAppointments()
        if (appointmentsResponse.isSuccess) {
          setTotalAppointments(appointmentsResponse.data)
        }

        const paymentResponse = await getTotalPaymentAmount()
        if (paymentResponse.isSuccess) {
          setTotalPaymentAmount(paymentResponse.data)
        }
        const userRolesResponse = await getUserRolesDistribution()
        if (userRolesResponse.isSuccess) {
          setUserRolesData(userRolesResponse.data)
          setChartKey(Date.now().toString())
        }

        const appointmentsByStatusResponse = await getAppointmentsByStatus()
        if (appointmentsByStatusResponse.isSuccess) {
          setAppointmentsByStatusData(appointmentsByStatusResponse.data)
          setChartKey(Date.now().toString())
        }

        const appointmentsByMonthResponse = await getAppointmentsByMonthAndStatus()
        if (appointmentsByMonthResponse.isSuccess) {
          setAppointmentsByMonthData(appointmentsByMonthResponse.data)
          setChartKey(Date.now().toString())
        }

        const top5VaccinesResponse = await getTop5MostBookedVaccines();
        if (top5VaccinesResponse.isSuccess) {
          setTop5Vaccines(top5VaccinesResponse.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Children</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalChildren !== null ? totalChildren.toLocaleString() : "Loading..."}
            </div>
            <p className="text-xs text-muted-foreground">All children profile from system</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Vaccines</CardTitle>
            <Syringe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalVaccines !== null ? totalVaccines.toLocaleString() : "Loading..."}
            </div>
            <p className="text-xs text-muted-foreground">All vaccine available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalAppointments !== null ? totalAppointments.toLocaleString() : "Loading..."}
            </div>
            <p className="text-xs text-muted-foreground">All appointments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointment Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalPaymentAmount !== null ? `${totalPaymentAmount.toLocaleString()}` : "Loading..."}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      {/* Coverage and Demographics Section */}
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <AppointmentsByStatusChart data={appointmentsByStatusData} chartKey={chartKey} />
        <UserRoleChart data={userRolesData} chartKey={chartKey} />
      </div>
      <div className="flex justify-center mb-8 w-[100%]">
        <div className="w-[60%]">
          <VaccineMostBookedChart data={top5Vaccines} />
          </div>
      </div>

      {/* Trends Section */}
      <div className="grid gap-6 mb-8 md:grid-cols-1">
        <RevenueChart />
        <AppointmentChart data={appointmentsByMonthData} chartKey={chartKey} />
      </div>
    </div>
  )
}


