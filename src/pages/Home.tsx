import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to VaccinaCare</h1>
      <p>Your trusted partner in child vaccination management</p>
      <nav>
        {/* <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/appointments">Book an Appointment</Link></li>
          <li><Link to="/children">Manage Children Profiles</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul> */}
      </nav>
    </div>
  )
}

export default Home
