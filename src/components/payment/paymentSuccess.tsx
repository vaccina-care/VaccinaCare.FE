"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import like from "@/assets/images/aba.png"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const successImg =
    "https://minio.ae-tao-fullstack-api.site/api/v1/buckets/vaccinacare-bucket/objects/download?preview=true&prefix=payment%2Fsuccess.jpg&version_id=null"

export default function PaymentSuccessPage() {
    const navigate = useNavigate()

    // Ensure we scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)

        // Clear any URL parameters that might be causing issues
        if (window.history.replaceState) {
            const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname
            window.history.replaceState({ path: cleanUrl }, "", cleanUrl)
        }
    }, [])

    // Handle navigation while preserving auth state
    const handleFinish = () => {
        // Navigate to home page without forcing a page reload
        navigate("/", { replace: true })
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
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
                            className="bg-green-100 rounded-full p-3"
                        >
                            <CheckCircle className="h-16 w-16 text-green-600" strokeWidth={2} />
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="absolute -top-2 -right-2 bg-[#1e1b4b] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center"
                        >
                            ✓
                        </motion.div>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl font-bold text-gray-800 mb-3"
                    >
                        Payment Successful!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600 mb-8"
                    >
                        Your payment has been completed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mb-8 w-full"
                    >
                        <img
                            src={successImg || "/placeholder.svg"}
                            alt="Payment Success"
                            width={300}
                            height={200}
                            className="w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="w-full"
                    >
                        <Button
                            onClick={handleFinish}
                            className="w-full py-6 text-lg bg-[#1e1b4b] hover:bg-[#1e1b4b]/90 rounded-xl shadow-lg
                            shadow-blue-200 transition-all duration-300
                            hover:shadow-blue-300 hover:-translate-y-1"
                        >
                            Finish
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="mt-8 flex flex-col items-center"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-1 rounded-full bg-blue-300"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                            <div className="h-1 w-1 rounded-full bg-[#1e1b4b]"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                            <div className="h-1 w-1 rounded-full bg-blue-300"></div>
                        </div>
                        <div className="text-xs text-gray-500">
                            Transaction ID:
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
                            Secure payments by VNPAY
                        </span>
                        <img src={like || "/placeholder.svg"} alt="Payment Provider" width={60} height={24} className="mx-2" />
                    </div>
                    <span className="flex items-center justify-center gap-1">
                        Powered by <strong className="font-medium">VACCINACARE TEAM</strong> |{" "}
                        <button onClick={() => navigate("/policy")} className="underline hover:text-[#1e1b4b] transition-colors">
                            Policy
                        </button>
                    </span>
                </div>
            </main>
        </div>
    )
}

