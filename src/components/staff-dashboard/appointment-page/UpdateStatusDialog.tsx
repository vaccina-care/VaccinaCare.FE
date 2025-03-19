"use client"

import { useState } from "react"
import { format } from "date-fns"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import type { AppointmentReviewData } from "@/api/staff/appointmentReview"

interface UpdateStatusDialogProps {
    appointment: AppointmentReviewData
    isOpen: boolean
    onClose: () => void
    onUpdateStatus: (appointmentId: string, newStatus: string, cancellationReason?: string) => void
}

export function UpdateStatusDialog({ appointment, isOpen, onClose, onUpdateStatus }: UpdateStatusDialogProps) {
    const [newStatus, setNewStatus] = useState<string>("Completed")
    const [cancellationReason, setCancellationReason] = useState<string>("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async () => {
        if (newStatus === "Cancelled" && !cancellationReason.trim()) {
            return // Validation error - need cancellation reason
        }

        setIsSubmitting(true)
        try {
            await onUpdateStatus(
                appointment.appointmentId,
                newStatus,
                newStatus === "Cancelled" ? cancellationReason : undefined,
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setNewStatus("Completed")
        setCancellationReason("")
    }

    const handleClose = () => {
        resetForm()
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Appointment Status</DialogTitle>
                    <DialogDescription>
                        Change the status of the appointment for {appointment.vaccineName} (Dose {appointment.doseNumber})
                    </DialogDescription>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Date</Label>
                        <div className="col-span-3">{format(new Date(appointment.appointmentDate), "dd/MM/yyyy HH:mm")}</div>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Current Status</Label>
                        <div className="col-span-3">{appointment.status}</div>
                    </div>

                    <div className="grid grid-cols-4 items-start gap-4">
                        <Label className="text-right pt-2">New Status</Label>
                        <RadioGroup className="col-span-3" value={newStatus} onValueChange={setNewStatus}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Completed" id="completed" />
                                <Label htmlFor="completed">Completed</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Cancelled" id="cancelled" />
                                <Label htmlFor="cancelled">Cancelled</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {newStatus === "Cancelled" && (
                        <div className="grid grid-cols-4 items-start gap-4">
                            <Label className="text-right pt-2" htmlFor="reason">
                                Reason
                            </Label>
                            <Textarea
                                id="reason"
                                className="col-span-3"
                                placeholder="Enter cancellation reason"
                                value={cancellationReason}
                                onChange={(e) => setCancellationReason(e.target.value)}
                            />
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting || (newStatus === "Cancelled" && !cancellationReason.trim())}
                    >
                        {isSubmitting ? "Updating..." : "Update Status"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

