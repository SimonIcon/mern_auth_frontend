import React from 'react'
import Navbar from '../homeComponets/Navbar'
import { Outlet } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='w-full min-h-screen'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default HomePage