import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-full'>
            <div className='w-full h-[70%] justify-center items-center pt-10'>
                <div className='pt-15 mt-15'>
                    <h3 className='text-center capitalize text-3xl font-bold'>recover now</h3>
                    <h5 className='text-sm font-semibold pt-10 text-center'>Enter the OTP to recover password</h5>
                </div>

                <form className='flex flex-col justify-center items-center pt-16 mt-15'>
                    <span className='text-sm'>Enter 6 digit sent to your email to recover password</span>
                    <input type='text' placeholder='OTP '
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg font-bold text-sm font-sans'
                    />
                    <button className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg bg-cyan-500 hover:bg-cyan-300
                capitalize font-semibold'
                        type='submit'
                    >recover</button>
                </form>
                <p className='text-center pt-4'>
                    <span className='text-sm font-semibold'>Can`t get OTP?</span>
                    <button className='ml-4 text-cyan-600 text-sm hover:text-red-400 capitalize'
                        onClick={() => navigate('/reset')}
                    >

                        Resend</button>
                </p>

            </div>
        </div>
    )
}

export default ForgotPassword