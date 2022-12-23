import React from 'react'
import { Link } from "react-router-dom"

function Stat() {
  return (
    <React.Fragment>
        <div>This is stat data</div>
        <Link to="/dashboard">Dashboard</Link>
    </React.Fragment>
    
  )
}

export default Stat