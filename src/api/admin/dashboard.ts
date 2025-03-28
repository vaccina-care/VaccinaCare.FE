import axiosInstance from "@/api/axiosInstance"
import type { ApiResponse } from "@/api/apiResponse"
import { AppointmentStatusDistribution } from "@/components/admin-dashboard/charts/appointments-by-status-chart"
import { UserRoleDistribution } from "@/components/admin-dashboard/charts/user-role-chart"

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
        const pageSize = 50; // API giới hạn 50 bản ghi mỗi trang
        let totalCount = 0;

        // Lấy dữ liệu từ trang đầu tiên để biết totalCount
        const firstResponse = await axiosInstance.get("/dashboard/appointments/all", {
            params: { PageSize: pageSize, PageNumber: pageNumber }
        });
        totalCount = firstResponse.data.data.totalCount;
        allAppointments = firstResponse.data.data.appointments;

        // Log số lượng cuộc hẹn từ trang đầu tiên
        console.log(`Page ${pageNumber} - Fetched ${allAppointments.length} appointments`);

        // Lặp qua các trang còn lại cho đến khi lấy đủ totalCount
        while (allAppointments.length < totalCount) {
            pageNumber++;

            // Tính số lượng bản ghi còn lại cần lấy
            const remainingCount = totalCount - allAppointments.length;
            if (remainingCount <= 0) {
                break; // Dừng lại nếu đã lấy đủ
            }

            // Gọi API với số lượng bản ghi còn lại hoặc pageSize
            const response = await axiosInstance.get("/dashboard/appointments/all", {
                params: { PageSize: Math.min(pageSize, remainingCount), PageNumber: pageNumber }
            });
            const appointments = response.data.data.appointments;

            // Log số lượng cuộc hẹn từ trang hiện tại
            console.log(`Page ${pageNumber} - Fetched ${appointments.length} appointments`);

            // Nếu không còn dữ liệu để lấy, thoát vòng lặp
            if (appointments.length === 0) {
                break;
            }

            // Chỉ lấy số lượng bản ghi cần thiết để không vượt quá totalCount
            const appointmentsToAdd = appointments.slice(0, remainingCount);
            allAppointments = [...allAppointments, ...appointmentsToAdd];
        }

        // Log tổng số lượng cuộc hẹn đã lấy được
        console.log("Total Appointments Fetched:", allAppointments.length);

        // Tính toán phân bố trạng thái
        const statusCount = allAppointments.reduce((acc: any, appointment: any) => {
            const status = appointment.status;
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});
        console.log("Status Count:", statusCount);

        const colors = {
            Pending: "#f59e0b", // Amber
            Confirmed: "#3b82f6", // Blue
            Completed: "#10b981", // Green
            Cancelled: "#f43f5e" // Red
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