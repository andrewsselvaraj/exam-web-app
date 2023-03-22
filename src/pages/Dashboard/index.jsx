import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();

const handleNavigate = () => {
    // programmatically navigate
    navigate("/school-info");
}
  return (
    <div>
      <button onClick={handleNavigate}>Navigate to School Info</button>
      <Link to={'/school-info'}>Navigate to School Info</Link>
    </div>
  )
}

export default Dashboard
