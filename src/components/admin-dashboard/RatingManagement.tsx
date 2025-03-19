"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
  Filter,
  ThumbsUp,
  ThumbsDown,
  BarChart4,
  CalendarDays,
} from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
// import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { RatingDistributionChart } from "@/components/admin-dashboard/charts/rating-distribution-chart"
import { RatingTrendChart } from "@/components/admin-dashboard/charts/rating-trend-chart"

type RatingSource = "app" | "website" | "in-person" | "email"
type RatingCategory = "service" | "vaccine" | "staff" | "facility" | "overall"

interface RatingType {
  id: string
  patientName: string
  patientId: string
  patientAvatar?: string
  rating: number
  comment: string
  category: RatingCategory
  source: RatingSource
  createdAt: string
  helpful: number
  notHelpful: number
  adminResponse?: string
  isVerified: boolean
}

// Generate mock rating data
const generateMockRatings = (count: number): RatingType[] => {
  const categories: RatingCategory[] = ["service", "vaccine", "staff", "facility", "overall"]
  const sources: RatingSource[] = ["app", "website", "in-person", "email"]

  return Array.from({ length: count }, (_, i) => {
    const rating = Math.floor(Math.random() * 5) + 1
    const category = categories[Math.floor(Math.random() * categories.length)]
    const source = sources[Math.floor(Math.random() * sources.length)]
    const isVerified = Math.random() > 0.3
    const hasAdminResponse = Math.random() > 0.7

    return {
      id: `rating-${i + 1}`,
      patientName: `Patient ${i + 1}`,
      patientId: `P-${1000 + i}`,
      patientAvatar: i % 5 === 0 ? undefined : `/placeholder.svg?height=40&width=40`,
      rating,
      comment: getRandomComment(rating),
      category,
      source,
      createdAt: getRandomDate(),
      helpful: Math.floor(Math.random() * 20),
      notHelpful: Math.floor(Math.random() * 5),
      adminResponse: hasAdminResponse ? getRandomAdminResponse() : undefined,
      isVerified,
    }
  })
}

// Helper function to generate random dates within the last 3 months
const getRandomDate = (): string => {
  const now = new Date()
  const threeMonthsAgo = new Date()
  threeMonthsAgo.setMonth(now.getMonth() - 3)

  const randomTimestamp = threeMonthsAgo.getTime() + Math.random() * (now.getTime() - threeMonthsAgo.getTime())
  const randomDate = new Date(randomTimestamp)

  return randomDate.toISOString().split("T")[0]
}

// Helper function to generate random comments based on rating
const getRandomComment = (rating: number): string => {
  if (rating >= 4) {
    const positiveComments = [
      "Excellent service! The staff was very professional and caring.",
      "I'm very satisfied with my experience. The facility was clean and well-maintained.",
      "The vaccination process was quick and painless. Highly recommend!",
      "Great experience overall. The staff was knowledgeable and answered all my questions.",
      "Very impressed with the level of care provided. Will definitely come back.",
    ]
    return positiveComments[Math.floor(Math.random() * positiveComments.length)]
  } else if (rating >= 3) {
    const neutralComments = [
      "Decent service, but had to wait longer than expected.",
      "The staff was friendly, but the facility could use some improvements.",
      "Overall okay experience, but the process could be more efficient.",
      "Satisfactory service, but nothing exceptional.",
      "Average experience. Some things could be improved.",
    ]
    return neutralComments[Math.floor(Math.random() * neutralComments.length)]
  } else {
    const negativeComments = [
      "Long waiting times and disorganized process.",
      "The staff seemed rushed and didn't address my concerns properly.",
      "Disappointed with the service. Expected better care.",
      "The facility was not as clean as I expected.",
      "Poor communication and follow-up. Needs improvement.",
    ]
    return negativeComments[Math.floor(Math.random() * negativeComments.length)]
  }
}

// Helper function to generate random admin responses
const getRandomAdminResponse = (): string => {
  const responses = [
    "Thank you for your feedback. We're glad you had a positive experience with us.",
    "We appreciate your feedback and will work on improving our services.",
    "Thank you for bringing this to our attention. We'll address these issues promptly.",
    "We're sorry to hear about your experience. Please contact our customer service for further assistance.",
    "Thank you for your review. Your feedback helps us improve our services.",
  ]
  return responses[Math.floor(Math.random() * responses.length)]
}

// Generate mock ratings
const mockRatings = generateMockRatings(100)

export function RatingManagement() {
  const [ratings, setRatings] = useState<RatingType[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [filterRating, setFilterRating] = useState<string>("all")
  const [page, setPage] = useState(1)
  const [pageSize] = useState(10)
  const [selectedRating, setSelectedRating] = useState<RatingType | null>(null)
  const [detailDialogOpen, setDetailDialogOpen] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
//   const { toast } = useToast()

  // Add debounced search values
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Calculate statistics
  const averageRating = mockRatings.reduce((acc, curr) => acc + curr.rating, 0) / mockRatings.length
  const fiveStarCount = mockRatings.filter((r) => r.rating === 5).length
  const fiveStarPercentage = (fiveStarCount / mockRatings.length) * 100
  const oneStarCount = mockRatings.filter((r) => r.rating === 1).length
  const oneStarPercentage = (oneStarCount / mockRatings.length) * 100

  // Rating distribution for chart
  const ratingDistribution = [
    { rating: "5 Stars", count: mockRatings.filter((r) => r.rating === 5).length },
    { rating: "4 Stars", count: mockRatings.filter((r) => r.rating === 4).length },
    { rating: "3 Stars", count: mockRatings.filter((r) => r.rating === 3).length },
    { rating: "2 Stars", count: mockRatings.filter((r) => r.rating === 2).length },
    { rating: "1 Star", count: mockRatings.filter((r) => r.rating === 1).length },
  ]

  // Category distribution
  const categoryDistribution = {
    service: mockRatings.filter((r) => r.category === "service").length,
    vaccine: mockRatings.filter((r) => r.category === "vaccine").length,
    staff: mockRatings.filter((r) => r.category === "staff").length,
    facility: mockRatings.filter((r) => r.category === "facility").length,
    overall: mockRatings.filter((r) => r.category === "overall").length,
  }

  // Recent ratings (last 30 days)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const recentRatings = mockRatings.filter((r) => new Date(r.createdAt) >= thirtyDaysAgo)
  const recentAverageRating =
    recentRatings.length > 0 ? recentRatings.reduce((acc, curr) => acc + curr.rating, 0) / recentRatings.length : 0

  // Fetch ratings with filtering and pagination
  const fetchRatings = useCallback(() => {
    setIsLoading(true)

    // Simulate API call with filtering
    setTimeout(() => {
      let filteredRatings = [...mockRatings]

      // Apply filters
      if (debouncedSearchTerm) {
        filteredRatings = filteredRatings.filter(
          (rating) =>
            rating.patientName.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            rating.comment.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            rating.patientId.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
        )
      }

      if (filterCategory !== "all") {
        filteredRatings = filteredRatings.filter((rating) => rating.category === filterCategory)
      }

      if (filterRating !== "all") {
        const ratingValue = Number.parseInt(filterRating)
        filteredRatings = filteredRatings.filter((rating) => rating.rating === ratingValue)
      }

      // Set total count for pagination
      setTotalCount(filteredRatings.length)

      // Apply pagination
      const start = (page - 1) * pageSize
      const paginatedRatings = filteredRatings.slice(start, start + pageSize)

      setRatings(paginatedRatings)
      setIsLoading(false)
    }, 500) // Simulate network delay
  }, [debouncedSearchTerm, filterCategory, filterRating, page, pageSize])

  useEffect(() => {
    fetchRatings()
  }, [fetchRatings])

  // View rating details
  const handleViewRating = useCallback((rating: RatingType) => {
    setSelectedRating(rating)
    setDetailDialogOpen(true)
  }, [])

  const totalPages = Math.ceil(totalCount / pageSize)

  // Helper function to render stars
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

  // Helper function to get category badge variant
  const getCategoryBadgeVariant = (category: RatingCategory) => {
    switch (category) {
      case "service":
        return "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-400"
      case "vaccine":
        return "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
      case "staff":
        return "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-400"
      case "facility":
        return "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-400"
      case "overall":
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  // Helper function to get source badge variant
  const getSourceBadgeVariant = (source: RatingSource) => {
    switch (source) {
      case "app":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-400"
      case "website":
        return "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-400"
      case "in-person":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-400"
      case "email":
        return "bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-500/20 dark:text-gray-400"
    }
  }

  // Format date to be more readable
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

      {/* Dashboard Overview Section */}
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
              <span>From {mockRatings.length} total ratings</span>
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
              <span>Last 30 days ({recentRatings.length} ratings)</span>
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

      {/* Charts Section */}
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Rating Distribution</CardTitle>
            <CardDescription>Breakdown of ratings by star count</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <RatingDistributionChart data={ratingDistribution} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rating Trends</CardTitle>
            <CardDescription>Average rating over time</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <RatingTrendChart />
          </CardContent>
        </Card>
      </div>

      {/* Category Distribution */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Rating by Category</CardTitle>
          <CardDescription>Distribution of ratings across different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {Object.entries(categoryDistribution).map(([category, count]) => (
              <div key={category} className="flex flex-col items-center">
                <div className={`w-full rounded-md p-3 mb-2 ${getCategoryBadgeVariant(category as RatingCategory)}`}>
                  <div className="text-center font-medium capitalize">{category}</div>
                </div>
                <div className="text-2xl font-bold">{count}</div>
                <div className="text-sm text-muted-foreground">
                  {((count / mockRatings.length) * 100).toFixed(1)}% of total
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ratings List */}
      <Card className="shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>All Ratings</CardTitle>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="h-8 gap-1">
              <Filter className="h-3.5 w-3.5" /> Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by patient name, ID, or comment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 w-full"
            />
          </div>

          {/* Advanced Filters - Collapsible */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-muted/50 rounded-lg">
              <div>
                <Label htmlFor="category-filter" className="text-sm font-medium mb-1.5 block">
                  Category
                </Label>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger id="category-filter">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="vaccine">Vaccine</SelectItem>
                    <SelectItem value="staff">Staff</SelectItem>
                    <SelectItem value="facility">Facility</SelectItem>
                    <SelectItem value="overall">Overall</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="rating-filter" className="text-sm font-medium mb-1.5 block">
                  Rating
                </Label>
                <Select value={filterRating} onValueChange={setFilterRating}>
                  <SelectTrigger id="rating-filter">
                    <SelectValue placeholder="Filter by rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Ratings</SelectItem>
                    <SelectItem value="5">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span>5 Stars</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="4">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span>4 Stars</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="3">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2, 3].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[1, 2].map((i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                        <span>3 Stars</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="2">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[1, 2].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[1, 2, 3].map((i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                        <span>2 Stars</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="1">
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {[1, 2, 3, 4].map((i) => (
                            <Star key={i} className="h-4 w-4 text-gray-300" />
                          ))}
                        </div>
                        <span>1 Star</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Ratings List */}
          <div className="space-y-4">
            {isLoading ? (
              // Skeleton loading state
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
              <div className="text-center py-8 text-muted-foreground">No ratings found matching your criteria</div>
            ) : (
              ratings.map((rating) => (
                <div key={rating.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={rating.patientAvatar} alt={rating.patientName} />
                        <AvatarFallback>{rating.patientName.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{rating.patientName}</div>
                        <div className="text-sm text-muted-foreground">ID: {rating.patientId}</div>
                      </div>
                    </div>
                    <div className="flex">{renderStars(rating.rating)}</div>
                  </div>

                  <div className="mt-3 text-sm">{rating.comment}</div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className={getCategoryBadgeVariant(rating.category)}>
                      {rating.category.charAt(0).toUpperCase() + rating.category.slice(1)}
                    </Badge>
                    <Badge variant="outline" className={getSourceBadgeVariant(rating.source)}>
                      {rating.source === "in-person"
                        ? "In Person"
                        : rating.source.charAt(0).toUpperCase() + rating.source.slice(1)}
                    </Badge>
                    {rating.isVerified && (
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                      >
                        Verified
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(rating.createdAt)}
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3" />
                        {rating.helpful}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <ThumbsDown className="h-3 w-3" />
                        {rating.notHelpful}
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleViewRating(rating)} className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {rating.adminResponse && (
                    <div className="mt-3 pl-3 border-l-2 border-muted-foreground/30">
                      <div className="text-xs font-medium mb-1">Admin Response:</div>
                      <div className="text-sm text-muted-foreground">{rating.adminResponse}</div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
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

      {/* Rating Detail Dialog */}
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
                  <AvatarImage src={selectedRating.patientAvatar} alt={selectedRating.patientName} />
                  <AvatarFallback>{selectedRating.patientName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{selectedRating.patientName}</h3>
                  <div className="flex">{renderStars(selectedRating.rating)}</div>
                  <div className="text-sm text-muted-foreground">Patient ID: {selectedRating.patientId}</div>
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="details">Rating Details</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-muted-foreground">Comment</Label>
                      <div className="rounded-md border p-3 bg-muted/20">{selectedRating.comment}</div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Category</Label>
                        <div className="flex">
                          <Badge variant="outline" className={getCategoryBadgeVariant(selectedRating.category)}>
                            {selectedRating.category.charAt(0).toUpperCase() + selectedRating.category.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Source</Label>
                        <div className="flex">
                          <Badge variant="outline" className={getSourceBadgeVariant(selectedRating.source)}>
                            {selectedRating.source === "in-person"
                              ? "In Person"
                              : selectedRating.source.charAt(0).toUpperCase() + selectedRating.source.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Date Submitted</Label>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span>{formatDate(selectedRating.createdAt)}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Verification Status</Label>
                        <div className="flex items-center gap-2">
                          {selectedRating.isVerified ? (
                            <Badge
                              variant="outline"
                              className="bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-400"
                            >
                              Verified
                            </Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-400"
                            >
                              Unverified
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Helpful Votes</Label>
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedRating.helpful}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Not Helpful Votes</Label>
                        <div className="flex items-center gap-2">
                          <ThumbsDown className="h-4 w-4 text-muted-foreground" />
                          <span>{selectedRating.notHelpful}</span>
                        </div>
                      </div>
                    </div>

                    {selectedRating.adminResponse && (
                      <div className="space-y-2">
                        <Label className="text-muted-foreground">Admin Response</Label>
                        <div className="rounded-md border p-3 bg-muted/20">{selectedRating.adminResponse}</div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

