import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full  h-[80px] bg-gray-800 text-white'>
            <div className='flex flex-row justify-between py-5 pt-[20px] px-6'>
                <div>
                    <h3 className='uppercase font-semibold text-xl'>student portal</h3>
                </div>
                <div className='justify-between flex flex-row w-3/5'>
                    <ul className='flex flex-row gap-5'>
                        <li>examination</li>
                        <li>fees</li>
                        <li>memo</li>
                    </ul>
                    <span onClick={() => navigate('/')}
                        className='capitalize text-sm font-semibold hover:text-pink-400 items-center'
                    >logout</span>
                </div>

            </div>


        </div>
    )
}

export default Navbar