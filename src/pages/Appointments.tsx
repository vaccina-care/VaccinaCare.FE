import { AppointmentForm } from "@/components/appointment/AppointmentForm"
import { AppointmentProvider } from "@/contexts/AppointmentContext"

const Appointment = () => {
  return (
    <AppointmentProvider>
      <div className="min-h-screen">
        <AppointmentForm />
      </div>
    </AppointmentProvider>
  )
}

export default Appointment

