import type React from "react"
import { cn } from "@/lib/utils"

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string
    size?: "sm" | "md" | "lg"
    fullScreen?: boolean
}

export function Loading({ text = "Loading...", size = "md", fullScreen = true, className, ...props }: LoadingProps) {
    const sizeClasses = {
        sm: "h-8 w-8 border-2",
        md: "h-12 w-12 border-4",
        lg: "h-16 w-16 border-4",
    }

    const spinner = (
        <div className="flex flex-col items-center space-y-4">
            <div
                className={cn("animate-spin rounded-full border-gray-300 border-t-gray-900", sizeClasses[size], className)}
            />
            {text && <p className="text-gray-500 dark:text-gray-400">{text}</p>}
        </div>
    )

    if (fullScreen) {
        return (
            <div className="flex h-screen w-full items-center justify-center" {...props}>
                {spinner}
            </div>
        )
    }

    return spinner
}

