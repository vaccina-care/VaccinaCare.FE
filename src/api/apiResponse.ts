
// API Response expect
export interface ApiResponse<T> {
    isSuccess: boolean
    message: string
    data: T
}