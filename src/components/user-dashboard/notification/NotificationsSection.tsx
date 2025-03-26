/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle2, Info, Loader2 } from "lucide-react"
import { getUserNotifications, type Notification } from "@/api/notification"
import { format, parseISO } from "date-fns"
import { enUS } from "date-fns/locale"

// Helper function to determine notification type based on title
const getNotificationType = (title: string): string => {
    if (title.includes("Appointment") || title.includes("appointment")) {
        return "appointment"
    } else if (title.includes("Payment") || title.includes("payment")) {
        return "payment"
    } else if (title.includes("Child Profile") || title.includes("child")) {
        return "profile"
    } else {
        return "system"
    }
}

// Icon component based on notification type
const NotificationIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "appointment":
            return <Calendar className="h-5 w-5 text-blue-500" />
        case "payment":
            return <CheckCircle2 className="h-5 w-5 text-green-500" />
        case "profile":
            return <CheckCircle2 className="h-5 w-5 text-purple-500" />
        case "system":
        default:
            return <Info className="h-5 w-5 text-gray-500" />
    }
}

const NotificationCard = ({ notification }: { notification: Notification }) => {
    const notificationType = getNotificationType(notification.title)

    // Format date to English locale
    const formatDate = (dateString: string) => {
        try {
            const date = parseISO(dateString)
            return format(date, "MMMM d, yyyy, h:mm a", { locale: enUS })
        } catch (error) {
            return dateString
        }
    }

    return (
        <Card className="mb-4 transition-colors hover:bg-gray-50">
            <CardContent className="p-4">
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <NotificationIcon type={notificationType} />
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{notification.title}</h4>
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-600">{notification.content}</p>

                            {notification.appointmentId && notificationType === "appointment" && (
                                <p className="text-xs text-gray-500 mt-2 italic">
                                    Please arrive 15 minutes before your appointment to complete the procedures.
                                    <br />
                                    If you need to make changes, you can update or cancel your appointment before the scheduled time.
                                </p>
                            )}
                        </div>
                        <p className="text-xs text-gray-400 mt-2">{formatDate(notification.createdAt)}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default function NotificationsSection() {
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                setIsLoading(true)
                const response = await getUserNotifications()
                if (response.isSuccess) {
                    setNotifications(response.data)
                } else {
                    setError(response.message || "Failed to fetch notifications")
                }
            } catch (error) {
                console.error("Error fetching notifications:", error)
                setError("An error occurred while fetching notifications")
            } finally {
                setIsLoading(false)
            }
        }

        fetchNotifications()
    }, [])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-[#1e1b4b]">Notifications</h2>
                    <p className="text-sm text-gray-500">View all your notifications and updates</p>
                </div>
                <Badge variant="outline" className="rounded-full">
                    {notifications.length} notifications
                </Badge>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-medium">Notification List</CardTitle>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center items-center h-[400px]">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : error ? (
                        <div className="text-center py-8 text-red-500">{error}</div>
                    ) : notifications.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">No notifications</div>
                    ) : (
                        <ScrollArea className="h-[600px] pr-4">
                            {notifications.map((notification) => (
                                <NotificationCard key={notification.id} notification={notification} />
                            ))}
                        </ScrollArea>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

