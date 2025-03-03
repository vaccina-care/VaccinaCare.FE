"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useAuthContext } from "@/contexts/AuthContexts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Package2, Syringe, CalendarDays, BarChart3, LogOut, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomSidebarProps {
    children: React.ReactNode
}

export function CustomSidebar({ children }: CustomSidebarProps) {
    const [isOpen, setIsOpen] = useState(true)
    const { user, logout } = useAuthContext()
    const location = useLocation()

    // Close sidebar on mobile by default
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const navigation = [
        {
            name: "Vaccines & Packages",
            href: "/staff/vaccines",
            icon: Syringe,
            match: ["/staff/vaccines", "/staff/packages"],
        },
        {
            name: "Appointments",
            href: "/staff/appointments",
            icon: CalendarDays,
            match: ["/staff/appointments"],
        },
        {
            name: "Reports",
            href: "/staff/reports",
            icon: BarChart3,
            match: ["/staff/reports"],
        },
        {
            name: "Inventory",
            href: "/staff/inventory",
            icon: Package2,
            match: ["/staff/inventory"],
        },
    ]

    const isActive = (item: (typeof navigation)[0]) => {
        return item.match.includes(location.pathname)
    }

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <motion.div
                initial={{ width: isOpen ? 280 : 80 }}
                animate={{ width: isOpen ? 280 : 80 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative flex flex-col border-r bg-white shadow-sm"
            >
                {/* Toggle button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-white shadow-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={isOpen ? "open" : "closed"}
                            initial={{ opacity: 0, rotate: 180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -180 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        </motion.div>
                    </AnimatePresence>
                </Button>

                {/* Header */}
                <div className="flex h-16 items-center border-b px-4">
                    <Link to="/staff" className="flex items-center gap-2">
                        <img src="/logo.png" alt="VaccinaCare" className="h-8 w-8 object-contain" />
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen && (
                                <motion.span
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="font-semibold whitespace-nowrap overflow-hidden"
                                >
                                    VaccinaCare Staff
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto py-4">
                    <nav className="grid gap-1 px-2">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.href}>
                                <Button
                                    variant={isActive(item) ? "secondary" : "ghost"}
                                    className={cn("w-full justify-start gap-3 transition-all", isOpen ? "px-4" : "px-0 justify-center")}
                                >
                                    <item.icon className="h-5 w-5" />
                                    <AnimatePresence mode="wait" initial={false}>
                                        {isOpen && (
                                            <motion.span
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="whitespace-nowrap overflow-hidden"
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Footer with user info */}
                <div className="border-t p-4">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 flex-shrink-0">
                            <AvatarImage src={user?.imageUrl} />
                            <AvatarFallback>{user?.fullName?.charAt(0) || user?.email?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <AnimatePresence mode="wait" initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 overflow-hidden"
                                >
                                    <p className="truncate text-sm font-medium">{user?.fullName}</p>
                                    <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={logout}
                            className={cn("ml-auto", !isOpen && "ml-0")}
                            title="Logout"
                        >
                            <LogOut className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </motion.div>

            {/* Main content */}
            <motion.div
                initial={{ marginLeft: 0 }}
                animate={{ marginLeft: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-1 overflow-auto"
            >
                {children}
            </motion.div>
        </div>
    )
}

