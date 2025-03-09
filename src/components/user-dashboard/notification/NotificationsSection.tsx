"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, User2, MapPin, Syringe, CheckCircle2, Info } from "lucide-react"
import { cn } from "@/lib/utils"

// Types for notifications
type NotificationType = "appointment" | "update" | "suggestion" | "system"

interface Notification {
    id: string
    type: NotificationType
    title: string
    content: {
        childName?: string
        appointmentDate?: string
        doctor?: string
        vaccine?: string
        location?: string
        message?: string
    }
    timestamp: string
    isRead: boolean
}

// Sample notifications data
const sampleNotifications: Notification[] = [
    {
        id: "1",
        type: "appointment",
        title: "Xác nhận lịch hẹn tiêm chủng",
        content: {
            childName: "Suppa skibidi",
            appointmentDate: "20/1/2025",
            doctor: "Nguyễn Văn Ô",
            vaccine: "Vaccine MMR",
            location: "Phòng khám số 3, Tầng 2",
        },
        timestamp: "2024-01-15T10:30:00Z",
        isRead: false,
    },
    {
        id: "2",
        type: "update",
        title: "Cập nhật thông tin trẻ",
        content: {
            childName: "Suppa skibidi",
            message: "Thông tin sức khỏe của trẻ đã được cập nhật thành công.",
        },
        timestamp: "2024-01-14T15:20:00Z",
        isRead: true,
    },
    {
        id: "3",
        type: "suggestion",
        title: "Đề xuất gói vaccine",
        content: {
            childName: "Suppa skibidi",
            message: "Dựa trên độ tuổi và lịch sử tiêm chủng, chúng tôi đề xuất gói vaccine 6 trong 1 cho trẻ.",
        },
        timestamp: "2024-01-13T09:15:00Z",
        isRead: true,
    },
    {
        id: "4",
        type: "system",
        title: "Chào mừng đến với VaccinaCare",
        content: {
            message: "Cảm ơn bạn đã đăng ký tài khoản. Hãy bắt đầu bằng việc thêm thông tin cho trẻ.",
        },
        timestamp: "2024-01-12T08:00:00Z",
        isRead: true,
    },
]

const NotificationIcon = ({ type }: { type: NotificationType }) => {
    switch (type) {
        case "appointment":
            return <Calendar className="h-5 w-5 text-blue-500" />
        case "update":
            return <CheckCircle2 className="h-5 w-5 text-green-500" />
        case "suggestion":
            return <Syringe className="h-5 w-5 text-purple-500" />
        case "system":
            return <Info className="h-5 w-5 text-gray-500" />
        default:
            return <Bell className="h-5 w-5 text-gray-500" />
    }
}

const NotificationCard = ({ notification }: { notification: Notification }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
    }

    return (
        <Card
            className={cn("mb-4 transition-colors hover:bg-gray-50", !notification.isRead && "border-l-4 border-l-blue-500")}
        >
            <CardContent className="p-4">
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <NotificationIcon type={notification.type} />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                            <Badge variant={notification.isRead ? "secondary" : "default"} className="text-xs">
                                {notification.isRead ? "Đã đọc" : "Chưa đọc"}
                            </Badge>
                        </div>
                        <div className="space-y-2">
                            {notification.content.childName && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <User2 className="h-4 w-4" />
                                    <span>Tên trẻ: {notification.content.childName}</span>
                                </div>
                            )}
                            {notification.content.appointmentDate && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Calendar className="h-4 w-4" />
                                    <span>Ngày giờ tiêm: {notification.content.appointmentDate}</span>
                                </div>
                            )}
                            {notification.content.doctor && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <User2 className="h-4 w-4" />
                                    <span>Bác sĩ phụ trách: {notification.content.doctor}</span>
                                </div>
                            )}
                            {notification.content.vaccine && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Syringe className="h-4 w-4" />
                                    <span>Vaccine: {notification.content.vaccine}</span>
                                </div>
                            )}
                            {notification.content.location && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <MapPin className="h-4 w-4" />
                                    <span>Địa điểm: {notification.content.location}</span>
                                </div>
                            )}
                            {notification.content.message && <p className="text-sm text-gray-600">{notification.content.message}</p>}
                            {notification.type === "appointment" && (
                                <p className="text-xs text-gray-500 mt-2 italic">
                                    Vui lòng đến sớm 15 phút trước giờ hẹn để hoàn tất các thủ tục.
                                    <br />
                                    Nếu có thay đổi, bạn có thể cập nhật hoặc hủy lịch hẹn trước thời gian giờ hẹn.
                                </p>
                            )}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{formatDate(notification.timestamp)}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function NotificationsSection() {
    const [notifications] = useState<Notification[]>(sampleNotifications)

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-[#1e1b4b]">Thông báo</h2>
                    <p className="text-sm text-gray-500">Xem tất cả thông báo và cập nhật của bạn</p>
                </div>
                <Badge variant="outline" className="rounded-full">
                    {notifications.filter((n) => !n.isRead).length} chưa đọc
                </Badge>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Danh sách thông báo</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                        {notifications.map((notification) => (
                            <NotificationCard key={notification.id} notification={notification} />
                        ))}
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

