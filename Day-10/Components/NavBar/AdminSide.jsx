import React from 'react'
import "../css/Admin/AdminSide.css"
import { Link } from 'react-router-dom'
export default function AdminSide() {
  return (
    
    <div className="sidebar">
    <ul>
      <li><Link to="/admindashboard">Dashboard</Link></li>
      <li><Link to="/adminuser">Users</Link></li>
      <li><Link to="/adminproduct">Product</Link></li>
      <li><Link to="/adminfeedback">Feedback</Link></li>
      <li><Link to="/">Log out</Link></li>
    </ul>
  </div>
   
  )
}
