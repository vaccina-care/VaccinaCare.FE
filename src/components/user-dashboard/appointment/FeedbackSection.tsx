"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, StarIcon, Trash2, Edit, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { createFeedback, updateFeedback, deleteFeedback, getUserFeedbacks, type Feedback } from "@/api/feedback"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface FeedbackSectionProps {
    appointmentId: string
}

export function FeedbackSection({ appointmentId }: FeedbackSectionProps) {
    const [feedback, setFeedback] = useState<Feedback | null>(null)
    const [rating, setRating] = useState(0)
    const [comments, setComments] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const { toast } = useToast()

    // Fetch existing feedback for this appointment
    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                setIsLoading(true)
                const response = await getUserFeedbacks()
                if (response.isSuccess) {
                    const existingFeedback = response.data.find((f) => f.appointmentId === appointmentId)
                    if (existingFeedback) {
                        setFeedback(existingFeedback)
                        setRating(existingFeedback.rating)
                        setComments(existingFeedback.comments)
                    }
                }
            } catch (error) {
                console.error("Error fetching feedback:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchFeedback()
    }, [appointmentId])

    const handleSubmitFeedback = async () => {
        if (rating === 0) {
            toast({
                title: "Rating Required",
                description: "Please select a rating before submitting your feedback.",
                variant: "destructive",
            })
            return
        }

        try {
            setIsSubmitting(true)

            if (feedback) {
                // Update existing feedback
                const response = await updateFeedback(feedback.id, {
                    rating,
                    comments,
                })

                if (response.isSuccess) {
                    setFeedback({
                        ...feedback,
                        rating,
                        comments,
                    })
                    toast({
                        title: "Feedback Updated",
                        description: "Your feedback has been updated successfully.",
                        variant: "success",
                    })
                }
            } else {
                // Create new feedback
                const response = await createFeedback({
                    appointmentId,
                    rating,
                    comments,
                })

                if (response.isSuccess) {
                    setFeedback({
                        id: response.data.appointmentId || "temp-id", // API might not return ID in the response
                        appointmentId,
                        rating,
                        comments,
                    })
                    toast({
                        title: "Feedback Submitted",
                        description: "Thank you for your feedback!",
                        variant: "success",
                    })
                }
            }

            setIsEditing(false)
        } catch (error) {
            console.error("Error submitting feedback:", error)
            toast({
                title: "Error",
                description: "Failed to submit feedback. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleDeleteFeedback = async () => {
        if (!feedback) return

        try {
            setIsSubmitting(true)
            const response = await deleteFeedback(feedback.id)

            if (response.isSuccess) {
                setFeedback(null)
                setRating(0)
                setComments("")
                toast({
                    title: "Feedback Deleted",
                    description: "Your feedback has been deleted successfully.",
                    variant: "success",
                })
            }
        } catch (error) {
            console.error("Error deleting feedback:", error)
            toast({
                title: "Error",
                description: "Failed to delete feedback. Please try again.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
            setIsDeleteDialogOpen(false)
        }
    }

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleCancelEdit = () => {
        if (feedback) {
            // Reset to original values
            setRating(feedback.rating)
            setComments(feedback.comments)
        } else {
            // Reset to defaults
            setRating(0)
            setComments("")
        }
        setIsEditing(false)
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
            </div>
        )
    }

    return (
        <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Your Feedback</h3>
                {feedback && !isEditing && (
                    <div className="flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleEditClick}
                            className="h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                        >
                            <Edit className="h-3.5 w-3.5 mr-1" />
                            Edit
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsDeleteDialogOpen(true)}
                            className="h-8 text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                            <Trash2 className="h-3.5 w-3.5 mr-1" />
                            Delete
                        </Button>
                    </div>
                )}
            </div>

            {isEditing || !feedback ? (
                <div className="space-y-4">
                    <div className="flex items-center justify-center">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="focus:outline-none"
                                    aria-label={`Rate ${star} stars`}
                                >
                                    {star <= rating ? (
                                        <StarIcon className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                                    ) : (
                                        <Star className="h-8 w-8 text-gray-300" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <Textarea
                        placeholder="Share your experience with this vaccination appointment..."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        className="min-h-[100px]"
                    />

                    <div className="flex justify-end gap-2">
                        {(isEditing || feedback) && (
                            <Button variant="outline" onClick={handleCancelEdit} disabled={isSubmitting}>
                                Cancel
                            </Button>
                        )}
                        <Button onClick={handleSubmitFeedback} disabled={isSubmitting} className="bg-blue-600 hover:bg-blue-700">
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    {feedback ? "Updating..." : "Submitting..."}
                                </>
                            ) : feedback ? (
                                "Update Feedback"
                            ) : (
                                "Submit Feedback"
                            )}
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star}>
                                    {star <= feedback.rating ? (
                                        <StarIcon className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                    ) : (
                                        <Star className="h-5 w-5 text-gray-300" />
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700">{feedback.comments}</p>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete your feedback? This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isSubmitting}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteFeedback}
                            disabled={isSubmitting}
                            className="bg-red-600 hover:bg-red-700 text-white"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Deleting...
                                </>
                            ) : (
                                "Delete"
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

