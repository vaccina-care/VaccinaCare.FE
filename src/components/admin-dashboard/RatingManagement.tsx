"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  StarHalf,
  ArrowUpRight,
  ThumbsUp,
  ThumbsDown,
  BarChart4,
  CalendarDays,
} from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { RatingDistributionChart } from "@/components/admin-dashboard/charts/rating-distribution-chart"
import { RatingTrendChart } from "@/components/admin-dashboard/charts/rating-trend-chart"
import { getAllFeedbacks, GetFeedbacksParams, FeedbackBase } from "@/api/admin/feedback"

export function RatingManagement() {
  const [ratings, setRatings] = useState<FeedbackBase[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedRating, setSelectedRating] = useState<FeedbackBase | null>(null)
  const [detailDialogOpen, setDetailDialogOpen] = useState(false)

  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const fetchRatings = useCallback(async () => {
    setIsLoading(true)
    try {
      const params: GetFeedbacksParams = {
        searchTerm: debouncedSearchTerm,
        pageIndex: page,
        pageSize,
      }

      const response = await getAllFeedbacks(params)
      
      if (response.isSuccess) {
        setRatings(response.data.feedbacks)
        setTotalCount(response.data.totalCount)
      }
    } catch (error) {
      console.error("Failed to fetch ratings:", error)
    } finally {
      setIsLoading(false)
    }
  }, [debouncedSearchTerm, page, pageSize])

  useEffect(() => {
    fetchRatings()
  }, [fetchRatings])

  const averageRating = ratings.length > 0 
    ? ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length 
    : 0
    
  const fiveStarCount = ratings.filter((r) => r.rating === 5).length
  const fiveStarPercentage = ratings.length > 0 ? (fiveStarCount / ratings.length) * 100 : 0
  const oneStarCount = ratings.filter((r) => r.rating === 1).length
  const oneStarPercentage = ratings.length > 0 ? (oneStarCount / ratings.length) * 100 : 0

  const ratingDistribution = [
    { rating: "5 Stars", count: ratings.filter((r) => r.rating === 5).length },
    { rating: "4 Stars", count: ratings.filter((r) => r.rating === 4).length },
    { rating: "3 Stars", count: ratings.filter((r) => r.rating === 3).length },
    { rating: "2 Stars", count: ratings.filter((r) => r.rating === 2).length },
    { rating: "1 Star", count: ratings.filter((r) => r.rating === 1).length },
  ]

  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const recentRatings = ratings
  const recentAverageRating =
    recentRatings.length > 0 ? recentRatings.reduce((acc, curr) => acc + curr.rating, 0) / recentRatings.length : 0

  const handleViewRating = useCallback((rating: FeedbackBase) => {
    setSelectedRating(rating)
    setDetailDialogOpen(true)
  }, [])

  const totalPages = Math.ceil(totalCount / pageSize)

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }
    return stars
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Rating Management</h1>
          <p className="text-muted-foreground mt-1">Monitor and analyze patient feedback and ratings</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center justify-between">
              Average Rating
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-400">{averageRating.toFixed(1)}</div>
              <div className="flex">{renderStars(averageRating)}</div>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-300 flex items-center mt-1">
              <span>From {totalCount} total ratings</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20 border-green-200 dark:border-green-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center justify-between">
              Recent Trend
              <BarChart4 className="h-5 w-5 text-green-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-green-700 dark:text-green-400">
                {recentAverageRating.toFixed(1)}
              </div>
              <div className="flex">{renderStars(recentAverageRating)}</div>
            </div>
            <p className="text-sm text-green-600 dark:text-green-300 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>Total ({recentRatings.length} ratings)</span> {/* Sửa vì không có createdAt */}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center justify-between">
              5-Star Ratings
              <ThumbsUp className="h-5 w-5 text-purple-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">{fiveStarCount}</div>
            <div className="flex items-center gap-2 mt-1">
              <Progress value={fiveStarPercentage} className="h-2" />
              <span className="text-sm text-purple-600 dark:text-purple-300">{fiveStarPercentage.toFixed(1)}%</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/40 dark:to-red-900/20 border-red-200 dark:border-red-800">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center justify-between">
              1-Star Ratings
              <ThumbsDown className="h-5 w-5 text-red-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-700 dark:text-red-400">{oneStarCount}</div>
            <div className="flex items-center gap-2 mt-1">
              <Progress value={oneStarPercentage} className="h-2" indicatorClassName="bg-red-500" />
              <span className="text-sm text-red-600 dark:text-red-300">{oneStarPercentage.toFixed(1)}%</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <RatingDistributionChart data={ratingDistribution} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <RatingTrendChart />
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <CardTitle>All Ratings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by comment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-full"
            />
          </div>

          <div className="space-y-4">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="border rounded-lg p-4 animate-pulse">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                      <div>
                        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                        <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
                      </div>
                    </div>
                    <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="mt-3 h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="mt-1 h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded" />
                  <div className="flex justify-between mt-4">
                    <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                    <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full" />
                  </div>
                </div>
              ))
            ) : ratings.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No ratings found</div>
            ) : (
              ratings.map((rating) => (
                <div key={rating.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Anonymous</div>
                        <div className="text-sm text-muted-foreground">Appointment: {rating.appointmentId}</div>
                      </div>
                    </div>
                    <div className="flex">{renderStars(rating.rating)}</div>
                  </div>

                  <div className="mt-3 text-sm">{rating.comments}</div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(new Date().toISOString())} {/* Mặc định ngày hiện tại vì không có createdAt */}
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleViewRating(rating)} className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-500">
              {totalCount > 0 ? (
                <>
                  {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, totalCount)} of {totalCount} ratings
                </>
              ) : (
                "No ratings"
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page >= totalPages}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={detailDialogOpen} onOpenChange={setDetailDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Rating Details</DialogTitle>
            <DialogDescription>Detailed information about this rating</DialogDescription>
          </DialogHeader>

          {selectedRating && (
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Anonymous</h3>
                  <div className="flex">{renderStars(selectedRating.rating)}</div>
                  <div className="text-sm text-muted-foreground">Appointment ID: {selectedRating.appointmentId}</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-muted-foreground">Comment</label>
                  <div className="rounded-md border p-3 bg-muted/20">{selectedRating.comments}</div>
                </div>

                <div className="space-y-2">
                  <label className="text-muted-foreground">Date Submitted</label>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    <span>{formatDate(new Date().toISOString())}</span> {/* Mặc định ngày hiện tại */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}