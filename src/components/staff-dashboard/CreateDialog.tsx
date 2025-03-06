"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Package, Syringe } from "lucide-react"

interface CreateSelectionDialogProps {
    isOpen: boolean
    onClose: () => void
    onSelectVaccine: () => void
    onSelectPackage: () => void
}

export function CreateSelectionDialog({
    isOpen,
    onClose,
    onSelectVaccine,
    onSelectPackage,
}: CreateSelectionDialogProps) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">Create New</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                    <Button
                        variant="outline"
                        className="h-32 flex flex-col items-center justify-center gap-3 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:border-blue-200 dark:hover:border-blue-800"
                        onClick={onSelectVaccine}
                    >
                        <Syringe className="h-10 w-10 text-blue-500" />
                        <span className="font-medium">Vaccine</span>
                    </Button>

                    <Button
                        variant="outline"
                        className="h-32 flex flex-col items-center justify-center gap-3 hover:bg-green-50 dark:hover:bg-green-950/30 hover:border-green-200 dark:hover:border-green-800"
                        onClick={onSelectPackage}
                    >
                        <Package className="h-10 w-10 text-green-500" />
                        <span className="font-medium">Package</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

