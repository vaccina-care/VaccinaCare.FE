import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, CalendarIcon } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { fetchUserData, type UserData } from "@/api/user"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

// Import images
import defaultAvatar from "@/assets/images/aba.png"

interface Province {
  code: string
  codename: string
  name: string
  division_type: string
  phone_code: string
}

interface District {
  code: string
  codename: string
  name: string
  division_type: string
  province_code: string
}

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  // Handle Province and Districts select box API
  const [provinces, setProvinces] = useState<Province[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [selectedProvince, setSelectedProvince] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [homeAddress, setHomeAddress] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await fetchUserData()
        setUserData(data)
        setDateOfBirth(new Date(data.dateOfBirth))
        // Parse address into province, district, and home address
        const addressParts = data.address.split(", ")
        if (addressParts.length >= 3) {
          setHomeAddress(addressParts[0])
          setSelectedDistrict(addressParts[1])
          setSelectedProvince(addressParts[2])
        } else {
          setHomeAddress(data.address)
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch user data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    loadUserData()
    fetchProvinces()
  }, [toast])

  useEffect(() => {
    if (selectedProvince) {
      fetchDistricts(selectedProvince)
    }
  }, [selectedProvince])

  const fetchProvinces = async () => {
    try {
      const response = await fetch("https://provinces.open-api.vn/api/p/")
      const data: Province[] = await response.json()
      setProvinces(data)
    } catch (error) {
      console.error("Error fetching provinces:", error)
    }
  }

  const fetchDistricts = async (provinceCode: string) => {
    try {
      const response = await fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
      const data = await response.json()
      setDistricts(data.districts)
    } catch (error) {
      console.error("Error fetching districts:", error)
    }
  }

  const handleSave = () => {
    if (userData && dateOfBirth) {
      const fullAddress = `${homeAddress}, ${selectedDistrict}, ${selectedProvince}`
      setUserData({
        ...userData,
        address: fullAddress,
        dateOfBirth: dateOfBirth.toISOString(),
      })
    }
    setIsEditing(false)
    // API call for update user info would go here
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!userData) {
    return <div>No user data available.</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={userData.imageUrl || defaultAvatar} alt="Profile" className="h-16 w-16 rounded-full object-cover" />
          <div>
            <h2 className="text-xl font-semibold">{userData.fullName}</h2>
            <p className="text-sm text-gray-500">{userData.roleName}</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
          <Pencil className="h-4 w-4 mr-2" />
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" value={userData.fullName} disabled={!isEditing} className="bg-transparent" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={userData.email} disabled={!isEditing} className="bg-transparent" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input id="phoneNumber" value={userData.phoneNumber} disabled={!isEditing} className="bg-transparent" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select disabled={!isEditing} value={userData.gender ? "true" : "false"}>
              <SelectTrigger className="w-full">
                <SelectValue>{userData.gender ? "Male" : "Female"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Male</SelectItem>
                <SelectItem value="false">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !dateOfBirth && "text-muted-foreground")}
                  disabled={!isEditing}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateOfBirth ? format(dateOfBirth, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={setDateOfBirth}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="province">Province</Label>
            <Select
              disabled={!isEditing}
              value={selectedProvince}
              onValueChange={(value) => {
                setSelectedProvince(value)
                setSelectedDistrict("")
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a province" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province.code} value={province.code}>
                    {province.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="district">District</Label>
            <Select
              disabled={!isEditing || !selectedProvince}
              value={selectedDistrict}
              onValueChange={setSelectedDistrict}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a district" />
              </SelectTrigger>
              <SelectContent>
                {districts.map((district) => (
                  <SelectItem key={district.code} value={district.code}>
                    {district.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="homeAddress">Home Address</Label>
          <Input
            id="homeAddress"
            value={homeAddress}
            onChange={(e) => setHomeAddress(e.target.value)}
            disabled={!isEditing}
            className="bg-transparent"
          />
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <Button onClick={handleSave}>Save changes</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile

