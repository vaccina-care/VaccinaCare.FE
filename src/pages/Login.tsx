import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
// Import your images
import logoImage from "@/assets/images/logo.png"
import loginIllustration from "@/assets/images/login.png"

const Login = () => {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-3 items-center text-center">
            <div className="w-16 h-16">
              {/* Replace with your logo */}
              <img
                src={logoImage}
                alt="VacinnaCare Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">
                VACINNA<span className="text-blue-500">CARE</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                The safety of your child today brings joy to parents tomorrow.
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Username & email"
                className="h-12"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                className="h-12"
              />
            </div>
            <div className="text-sm">
              {"Don't have account? "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Create account
              </Link>
            </div>
            <Button className="w-full h-12 text-base bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-[#EEF2FF]">
        <img
          src={loginIllustration}
          alt="Medical professional illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Login

