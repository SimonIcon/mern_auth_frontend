import React from 'react'
import { Outlet } from "react-router-dom"

const AuthPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='h-[75vh] w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 bg-slate-100 rounded-lg'>
                <Outlet />
            </div>
        </div>
    )
}

export default AuthPage