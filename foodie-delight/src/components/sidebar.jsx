import React from 'react'
import {ReactComponent  as AdminIcon} from "../assets/admin-icon.svg"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>  
        <div className='logo-container'>
            <h2 className='logo'>Foodie Delight</h2>
        </div>
        <div className='icon-container'>
            <AdminIcon className="icon"/>
        </div>
        <p className='user-name'>User1</p>
        <p className='user-role'>Admin</p>
        <nav className='nav-container'>
            <ul>
                <li className='nav-link'><Link to="/add-restaurant">Add Restaurant</Link></li>
                <li className='nav-link'><Link to="/all-restaurants">View All Restaurants</Link></li>
            </ul>
        </nav>
        <Link to="/login" className='logout-link'>Logout</Link>
    </>
  )
}

export default SideBar