"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const failImg =
    "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=payment%2Ffail.jpg&version_id=null"

export default function PaymentFailPage() {
    const navigate = useNavigate()

    // Ensure we scroll to top when component mounts and clear any state
    useEffect(() => {
        window.scrollTo(0, 0)

        // Clear any URL parameters and state that might be causing issues
        if (window.history.replaceState) {
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname
            window.history.replaceState({}, "", cleanUrl)
        }
    }, [])

    // Handle navigation while preserving auth state but clearing appointment state
    const handleTryAgain = () => {
        // Navigate back to appointments page with clean state
        navigate("/appointments", {
            replace: false,
            state: {}, // Empty state to clear any previous state
        })
    }

    const handleReturnHome = () => {
        // Navigate to home page without forcing a page reload, but with a clean state
        navigate("/", {
            replace: true,
            state: {}, // Empty state to clear any previous state
        })
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full mx-auto flex flex-col items-center bg-white p-10 rounded-2xl shadow-xl"
                >
                    <div className="relative mb-8">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.1,
                            }}
                            className="bg-orange-100 rounded-full p-3"
                        >
                            <XCircle className="h-16 w-16 text-orange-600" strokeWidth={2} />
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute -top-2 -right-2 bg-[#1e1b4b] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center"
                        >
                            !
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold text-gray-800 mb-3"
                    >
                        Payment Failed
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mb-8"
                    >
                        Your payment could not be processed. Please try again.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8 w-full"
                    >
                        <img
                            src={failImg || "/placeholder.svg"}
                            alt="Payment Error Illustration"
                            width={300}
                            height={200}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full space-y-4"
                    >
                        <Button
                            onClick={handleTryAgain}
                            className="w-full py-6 text-lg bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 hover:shadow-blue-300 hover:-translate-y-1"
                        >
                            Try Again
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleReturnHome}
                            className="w-full py-6 text-lg border-gray-200 text-[#1e1b4b] hover:bg-gray-50"
                        >
                            Return Home
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 flex flex-col items-center"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                            <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                            <div className="h-1 w-1 rounded-full bg-[#1e1b4b]"></div>
                            <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                            <div className="h-1 w-1 rounded-full bg-gray-400"></div>
                            <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                        </div>
                        <div className="text-xs text-gray-500">
                            Error ID: #ERR
                            {Math.floor(Math.random() * 1000000)
                                .toString()
                                .padStart(6, "0")}
                        </div>
                    </motion.div>
                </motion.div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-400"
                            >
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            Need help?
                        </span>
                        <button
                            onClick={() => navigate("/about", { state: {} })}
                            className="text-[#1e1b4b] hover:text-[#1e1b4b]/80 font-medium"
                        >
                            Contact Support
                        </button>
                    </div>
                    <span className="flex items-center justify-center gap-1">
                        Powered by <strong className="font-medium">VACCINACARE TEAM</strong> |{" "}
                        <button
                            onClick={() => navigate("/policy", { state: {} })}
                            className="underline hover:text-[#1e1b4b] transition-colors"
                        >
                            Policy
                        </button>
                    </span>
                </div>
            </main>
        </div>
    )
}

