import { useFormik } from 'formik'
import React from 'react'
import { Toaster, toast } from 'react-hot-toast'

const ResetPassword = () => {

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validateOnBlur: false,
        validateOnChange: false,
        validate: async (values) => {
            const error = {}
            if (values.password !== values.confirmPassword) {
                error.password = toast.error("password did not match")
            } else if (values.password === " " || !values.password) {
                error.password = toast.error("password required")
            } else if (values.confirmPassword === "" || !values.confirmPassword) {
                error.password = toast.error("confirm password required")
            }

        },
        onSubmit: async () => {

        }
    })
    return (
        <div className='w-full h-full'>
            <div className='w-full h-[70%] justify-center items-center pt-10'>
                <Toaster position='top-center' reverseOrder={false} />
                <h4 className='text-center text-2xl capitalize font-bold pt-10'>Reset password</h4>
                <form onSubmit={formik.handleSubmit} className='flex flex-col justify-center items-center'>
                    <input type='password' placeholder='password' name='password' value={formik.values.password}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                    />
                    <input type='password' placeholder='confirm password' name='confirmPassword' value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                    />
                    <button type='submit'
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg bg-cyan-500 hover:bg-cyan-300 capitalize font-semibold'
                    >Reset</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword