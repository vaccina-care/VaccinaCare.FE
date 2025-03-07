"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModeAnimation, ThemeAnimationType } from "react-theme-switch-animation"

export function ThemeToggle() {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
        animationType: ThemeAnimationType.CIRCLE,
        duration: 800,
        globalClassName: "dark",
    })

    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            onClick={toggleSwitchTheme}
            className="h-9 w-9"
            title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
            {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

