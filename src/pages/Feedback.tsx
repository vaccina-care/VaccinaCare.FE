import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    comment: "",
    rating: 0,
  })
  const [hoveredRating, setHoveredRating] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating,
    }))
  }

  const getRatingText = (rating: number) => {
    switch (rating) {
      case 1:
        return "Rất không hài lòng"
      case 2:
        return "Không hài lòng"
      case 3:
        return "Bình thường"
      case 4:
        return "Hài lòng"
      case 5:
        return "Rất hài lòng"
      default:
        return ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
    alert("Feedback submitted successfully!")
    setFormData({
      comment: "",
      rating: 0,
    })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Feedback Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              name="comment"
              placeholder="Enter your comment"
              value={formData.comment}
              onChange={handleChange}
              required
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating">Rating (1-5)</Label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none transition-transform duration-200 ease-in-out transform hover:scale-110"
                >
                  <Star
                    size={24}
                    className={`${
                      (hoveredRating || formData.rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    } cursor-pointer`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm">
                {(hoveredRating || formData.rating) > 0 && getRatingText(hoveredRating || formData.rating)}
              </span>
            </div>
          </div>

          <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
            Submit Feedback
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

