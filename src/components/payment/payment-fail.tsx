import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"
import sad from "@/assets/images/sad-jerry.png"
import { Link } from "react-router-dom"

export default function PaymentFailPage() {
    return (
        <div className="container mx-auto py-8 px-4">
            <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-red-50">
                <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
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
                                className="bg-red-100 rounded-full p-3"
                            >
                                <XCircle className="h-16 w-16 text-red-600" strokeWidth={2} />
                            </motion.div>
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.3 }}
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center"
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
                                src={sad}
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
                            <Link to="/payment-fail" className="w-full block">
                                <Button className="w-full py-6 text-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-xl shadow-lg shadow-red-200 transition-all duration-300 hover:shadow-red-300 hover:-translate-y-1">
                                    Try Again
                                </Button>
                            </Link>
                            <Link to="/" className="block">
                                <Button variant="outline" className="w-full py-6 text-lg border-red-200 text-red-600 hover:bg-red-50">
                                    Return Home
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="mt-8 flex flex-col items-center"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-1 w-1 rounded-full bg-red-300"></div>
                                <div className="h-1 w-1 rounded-full bg-red-400"></div>
                                <div className="h-1 w-1 rounded-full bg-red-500"></div>
                                <div className="h-1 w-1 rounded-full bg-red-600"></div>
                                <div className="h-1 w-1 rounded-full bg-red-500"></div>
                                <div className="h-1 w-1 rounded-full bg-red-400"></div>
                                <div className="h-1 w-1 rounded-full bg-red-300"></div>
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
                            <Link to="/about" className="text-red-600 hover:text-red-700 font-medium">
                                Contact Support
                            </Link>
                        </div>
                        <span className="flex items-center gap-1">
                            Powered by <strong className="font-medium">VACCINACARE SKIBIDI TEAM</strong> |{" "}
                            <Link to="/policy" className="underline hover:text-red-600 transition-colors">
                                Policy
                            </Link>
                        </span>
                    </div>
                </main>
            </div>
        </div>
    )
}

