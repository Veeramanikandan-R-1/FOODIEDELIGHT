import React from 'react'
import SideBar from './sidebar'
import { Outlet } from 'react-router-dom'
import "./dashboard.scss"

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
        <div className='sidebar-container'>
            <SideBar />
        </div>
        <div className='main-content'> 
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard