import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AuthLayout from "@/components/AuthLayout"

// Import images
import logoImage from "@/assets/images/logo.png"
import registerIllustration from "@/assets/images/register.png"

const Register = () => {
  return (
    <AuthLayout illustration={registerIllustration} isReversed>
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-3 items-center text-center">
          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24"
          >
            <img
              src={logoImage}
              alt="VacinnaCare Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight font-yeseva">
                <span className="tracking-[0.1em]">VACINNA</span>
                <span className="text-blue-500 tracking-[0.1em]">CARE</span>
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
              placeholder="Email"
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
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Confirm password"
              className="h-12"
            />
          </div>
          <div className="text-sm">
            {"Already have an account? "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              Login
            </Link>
          </div>
          <Button className="w-full h-12 text-base bg-[#1e1b4b] hover:bg-[#1e1b4b]/90">
            Register
          </Button>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

export default Register

