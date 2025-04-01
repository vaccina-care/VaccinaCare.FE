import axiosInstance from "@/api/axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"
import { AppointmentStatusDistribution } from "@/components/admin-dashboard/charts/appointments-by-status-chart"
import { UserRoleDistribution } from "@/components/admin-dashboard/charts/user-role-chart"
import { AppointmentByMonth } from "@/components/admin-dashboard/charts/appointment-chart"
import { VaccineBookingDto } from "@/components/admin-dashboard/charts/vaccine-most-booked-chart"

interface Appointment {
    appointmentDate: string;
    status: "Pending" | "Completed" | "Cancelled" | "Confirmed";
}

// tổng số trẻ em
export const getTotalChildren = async (): Promise<ApiResponse<number>> => {
    try {
        const response = await axiosInstance.get("/dashboard/children/profile")
        return response.data
    } catch (error) {
        console.error("Error fetching total children:", error)
        throw error
    }
}

// tổng số vaccine có sẵn
export const getTotalVaccines = async (): Promise<ApiResponse<number>> => {
    try {
        const response = await axiosInstance.get("/dashboard/vaccines/available")
        return response.data
    } catch (error) {
        console.error("Error fetching total vaccines:", error)
        throw error
    }
}

// tổng số cuộc hẹn
export const getTotalAppointments = async (): Promise<ApiResponse<number>> => {
    try {
        const response = await axiosInstance.get("/dashboard/appointments/all", {
            params: { PageSize: 1 }
        })
        return {
            isSuccess: response.data.isSuccess,
            message: response.data.message,
            data: response.data.data.totalCount
        }
    } catch (error) {
        console.error("Error fetching total appointments:", error)
        throw error
    }
}

// tổng số tiền thanh toán
export const getTotalPaymentAmount = async (): Promise<ApiResponse<number>> => {
    try {
        const response = await axiosInstance.get("/dashboard/payments/amount")
        return {
            isSuccess: response.data.isSuccess,
            message: response.data.message,
            data: response.data.data.totalAmount
        }
    } catch (error) {
        console.error("Error fetching total payment amount:", error)
        throw error
    }
}

export const getTop5MostBookedVaccines = async (): Promise<ApiResponse<VaccineBookingDto[]>> => {
    try {
        const response = await axiosInstance.get("/dashboard/vaccines/top5-booked");
        return{
            isSuccess: response.data.isSuccess,
            message: response.data.message,
            data: response.data.data
        } 
    } catch (error) {
        console.error("Error fetching top 5 most booked vaccines:", error);
        throw error;
    }
};

export const getUserRolesDistribution = async (): Promise<ApiResponse<UserRoleDistribution[]>> => {
    try {
        const response = await axiosInstance.get("/admin/users", {
            params: { pageSize: 1000 } 
        })
        const users = response.data.data.users
        const roleCount = users.reduce((acc: any, user: any) => {
            acc[user.roleName] = (acc[user.roleName] || 0) + 1
            return acc
        }, {})
        const colors = {
            Customer: "#3b82f6", 
            Staff: "#10b981", 
            Admin: "#f43f5e" 
        }
        const data = Object.entries(roleCount).map(([name, value]) => ({
            name,
            value: value as number,
            color: colors[name as keyof typeof colors]
        }))
        return {
            isSuccess: true,
            message: "User roles distribution retrieved successfully",
            data
        }
    } catch (error) {
        console.error("Error fetching user roles distribution:", error)
        throw error
    }
}

// cuộc hẹn theo trạng thái
export const getAppointmentsByStatus = async (): Promise<ApiResponse<AppointmentStatusDistribution[]>> => {
    try {
        let allAppointments: any[] = [];
        let pageNumber = 1;
        const pageSize = 50; 
        let totalCount = 0;

        const firstResponse = await axiosInstance.get("/dashboard/appointments/all", {
            params: { PageSize: pageSize, PageNumber: pageNumber }
        });
        totalCount = firstResponse.data.data.totalCount;
        allAppointments = firstResponse.data.data.appointments;

        console.log(`Page ${pageNumber} - Fetched ${allAppointments.length} appointments`);

        while (allAppointments.length < totalCount) {
            pageNumber++;

            const remainingCount = totalCount - allAppointments.length;
            if (remainingCount <= 0) {
                break;
            }

            const response = await axiosInstance.get("/dashboard/appointments/all", {
                params: { PageSize: Math.min(pageSize, remainingCount), PageNumber: pageNumber }
            });
            const appointments = response.data.data.appointments;

            console.log(`Page ${pageNumber} - Fetched ${appointments.length} appointments`);

            if (appointments.length === 0) {
                break;
            }

            const appointmentsToAdd = appointments.slice(0, remainingCount);
            allAppointments = [...allAppointments, ...appointmentsToAdd];
        }

        console.log("Total Appointments Fetched:", allAppointments.length);

        const statusCount = allAppointments.reduce((acc: any, appointment: any) => {
            const status = appointment.status;
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
        console.log("Status Count:", statusCount);

        const colors = {
            Pending: "#f59e0b", 
            Confirmed: "#3b82f6", 
            Completed: "#10b981", 
            Cancelled: "#f43f5e" 
        };
        const data = Object.entries(statusCount).map(([name, value]) => ({
            name,
            value: value as number,
            color: colors[name as keyof typeof colors]
        }));
        return {
            isSuccess: true,
            message: "Appointments by status retrieved successfully",
            data
        };
    } catch (error) {
        console.error("Error fetching appointments by status:", error);
        throw error;
    }
}

export const getAppointmentsByMonthAndStatus = async (): Promise<ApiResponse<AppointmentByMonth[]>> => {
    try {
        let allAppointments: Appointment[] = [];
        let pageNumber = 1;
        const pageSize = 50;
        let totalCount = 0;

        const firstResponse = await axiosInstance.get("/dashboard/appointments/all", {
            params: { PageSize: pageSize, PageNumber: pageNumber }
        });
        totalCount = firstResponse.data.data.totalCount;
        allAppointments = firstResponse.data.data.appointments;

        console.log(`Page ${pageNumber} - Fetched ${allAppointments.length} appointments`);

        while (allAppointments.length < totalCount) {
            pageNumber++;

            const remainingCount = totalCount - allAppointments.length;
            if (remainingCount <= 0) {
                break;
            }

            const response = await axiosInstance.get("/dashboard/appointments/all", {
                params: { PageSize: Math.min(pageSize, remainingCount), PageNumber: pageNumber }
            });
            const appointments = response.data.data.appointments;

            console.log(`Page ${pageNumber} - Fetched ${appointments.length} appointments`);

            if (appointments.length === 0) {
                break;
            }

            const appointmentsToAdd = appointments.slice(0, remainingCount);
            allAppointments = [...allAppointments, ...appointmentsToAdd];
        }

        console.log("Total Appointments Fetched:", allAppointments.length);

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthlyData: { [key: string]: { Pending: number; Completed: number; Cancelled: number } } = {};

        months.forEach((month) => {
            monthlyData[month] = { Pending: 0, Completed: 0, Cancelled: 0 };
        });

        allAppointments.forEach((appointment: Appointment) => {
            const date = new Date(appointment.appointmentDate);
            const monthIndex = date.getMonth(); // 0-11 (Jan-Dec)
            const month = months[monthIndex];
            const status = appointment.status;

            if (status === "Pending" || status === "Completed" || status === "Cancelled") {
                monthlyData[month][status] = (monthlyData[month][status] || 0) + 1;
            }
        });

        const data: AppointmentByMonth[] = months.map((month) => ({
            month,
            Pending: monthlyData[month].Pending,
            Completed: monthlyData[month].Completed,
            Cancelled: monthlyData[month].Cancelled,
        }));

        console.log("Monthly Appointments Data:", data);

        return {
            isSuccess: true,
            message: "Appointments by month and status retrieved successfully",
            data
        };
    } catch (error) {
        console.error("Error fetching appointments by month and status:", error);
        throw error;
    }
}


export const getPaymentAmountByDateRange = async (
    startDate?: string, // e.g., "2025-01-01"
    endDate?: string   // e.g., "2025-12-31"
  ): Promise<ApiResponse<number>> => {
    try {
      const response = await axiosInstance.get("/dashboard/payments/amount", {
        params: {
          startDate: startDate || undefined,
          endDate: endDate || undefined,
        },
      });
      return {
        isSuccess: response.data.isSuccess,
        message: response.data.message,
        data: response.data.data.totalAmount, // Adjust if field name differs
      };
    } catch (error) {
      console.error("Error fetching payment amount by date range:", error);
      return {
        isSuccess: false,
        message: "Failed to fetch payment amount",
        data: 0,
      };
    }
  };
  
  // Fetch monthly revenue for the current year
  export const getMonthlyRevenue = async (): Promise<ApiResponse<{ month: string; revenue: number }[]>> => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentYear = new Date().getFullYear(); // e.g., 2025
    const revenueData: { month: string; revenue: number }[] = [];
  
    for (let i = 0; i < months.length; i++) {
      const startDate = `${currentYear}-${String(i + 1).padStart(2, "0")}-01`; // e.g., "2025-01-01"
      const endDate = `${currentYear}-${String(i + 1).padStart(2, "0")}-${new Date(currentYear, i + 1, 0).getDate()}`; // Last day of month
  
      const response = await getPaymentAmountByDateRange(startDate, endDate);
      revenueData.push({
        month: months[i],
        revenue: response.isSuccess ? response.data : 0, // Default to 0 if fetch fails
      });
    }
  
    return {
      isSuccess: true,
      message: "Monthly revenue retrieved successfully",
      data: revenueData,
    };
  };