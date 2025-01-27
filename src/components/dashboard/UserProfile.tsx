import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UserData {
  firstName: string
  lastName: string
  email: string
  phone: string
  province: string
  district: string
  address: string
}

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
  const [userData, setUserData] = useState<UserData>({
    firstName: "Suppa",
    lastName: "Nega",
    email: "skibidihawktuah@gmail.com",
    phone: "0123 51251 553",
    province: "",
    district: "",
    address: "123 Đường ABC",
  })

  const [provinces, setProvinces] = useState<Province[]>([])
  const [districts, setDistricts] = useState<District[]>([])

  useEffect(() => {
    fetchProvinces()
  }, [])

  useEffect(() => {
    if (userData.province) {
      fetchDistricts(userData.province)
    }
  }, [userData.province])

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
    setIsEditing(false)
    // API call for update user info
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-v1u550H0xXSGiXWP63zhL8iHBTFCF0.png"
            alt="Profile"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">Suppa Nega</h2>
            <p className="text-sm text-gray-500">User</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
          <Pencil className="h-4 w-4 mr-2" />
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>

      <div className="border rounded-lg p-4 space-y-4">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
              disabled={!isEditing}
              className="bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
              disabled={!isEditing}
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              disabled={!isEditing}
              className="bg-transparent"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={userData.phone}
              onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
              disabled={!isEditing}
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="province">Province</Label>
            <Select
              disabled={!isEditing}
              value={userData.province}
              onValueChange={(value) => setUserData({ ...userData, province: value, district: "" })}
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
              disabled={!isEditing || !userData.province}
              value={userData.district}
              onValueChange={(value) => setUserData({ ...userData, district: value })}
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
          <Label htmlFor="address">Home Address</Label>
          <Input
            id="address"
            value={userData.address}
            onChange={(e) => setUserData({ ...userData, address: e.target.value })}
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

