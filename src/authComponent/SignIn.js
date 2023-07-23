import React from 'react'
import profile from "../assest/profileOne.png"
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'



const SignIn = () => {
    const navigate = useNavigate()
    // using formik
    function isValidEmail(e) {
        const re = /\S+@\S+\.\S+/;
        return re.test(e);
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: async values => {
            const error = {}
            if (!values.email) {
                error.email = toast.error('email required')
            } else if (!isValidEmail(values.email)) {
                error.email = toast.error('invalid email')
            } else if (values.password.length < 6) {
                error.password = toast.error('weak password')
            }

            return error
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async () => {
            toast.success('ready to login')
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);


        }
    })

    return (
        <div className='flex flex-col  h-full w-full'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex flex-row items-start justify-between px-5 pt-7'>
                <div className='flex flex-col w-[60%] items-start justify-between'>
                    <h4 className='text-3xl text-cyan-600 capitalize font-semibold pb-6'>welcome again</h4>
                    <p className='text-sm font-light'>Explore more by connecting with us</p>
                </div>
                <div className='w-[35%]'>
                    <img src={profile} alt="profile" className='h-[150px] w-[150px] object-cover' />
                </div>
            </div>
            {/* login form */}
            <form className='flex flex-col justify-center items-center' onSubmit={formik.handleSubmit}>
                <input type='email' placeholder='email' name='email' value={formik.values.email}
                    onChange={formik.handleChange}
                    className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                />
                <input type='password' placeholder='password' name='password' value={formik.values.password}
                    onChange={formik.handleChange}
                    className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                />
                <p className='text-center pt-4'>
                    <span className='text-sm font-light'>forgot password</span>
                    <span onClick={() => navigate('/retrievePassword')}
                        className='ml-4 text-green-600 text-sm hover:text-green-400 hover:underline capitalize'
                    >recover now</span>
                </p>
                <button className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg bg-cyan-500 hover:bg-cyan-300
                capitalize font-semibold'
                    type='submit'
                >login</button>
            </form>

            <p className='text-center pt-4'>
                <span className='text-sm font-light'>Don`t have an account</span>
                <span onClick={() => navigate('/signUp')}
                    className='ml-4 text-cyan-600 text-sm hover:text-cyan-400 hover:underline capitalize'
                >Register</span>
            </p>
        </div>
    )
}

export default SignIn