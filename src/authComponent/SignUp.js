import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import profile from "../assest/profileOne.png"
import convertToBase64 from "../helper/convert"
import styles from "../styles/Register.module.css"


const SignUp = () => {
    const navigate = useNavigate()
    // validating email
    function isValidEmail(e) {
        const re = /\S+@\S+\.\S+/;
        return re.test(e);
    }
    // creating formik
    const [file, setFile] = useState('')

    const onUploadProfile = async (e) => {
        const base64 = await convertToBase64(e.target.files[0])
        setFile(base64)
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            country: "",
            cellphone: "",
            email: "",
            password: "",

        },
        validate: async (values) => {
            const error = {}
            if (!values.email) {
                error.email = toast.error('email required')
            } else if (!isValidEmail(values.email)) {
                error.email = toast.error('invalid email')
            } else if (!values.username || values.username === "") {
                error.username = toast.error('username required')
            } else if (values.password.length < 6) {
                error.password = toast.error('weak password')
            } else if (!values.country || values.country === "") {
                error.country = toast.error('country required')
            }

            return error
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            values = await Object.assign(values, { profile: file || "" })
            toast.success('created an account')
            console.log(values)
            setTimeout(() => {
                navigate('/')
            }, 2000);
        }
    })


    return (
        <div className='flex flex-col  h-full w-full'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex flex-col'>
                <form className='flex flex-col justify-center items-center' onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col items-center justify-between px-3'>
                        <h4 className='pb-2 font-semibold text-sm'>
                            upload your profile picture</h4>
                        <label htmlFor='profile'>
                            <img src={file || profile} alt="profile" className='h-[100px] w-[100px] rounded-full object-cover' />
                        </label>
                        <div className='flex-flex-col'>
                            <input type='file' id='profile' onChange={onUploadProfile} className={styles.profile} />
                        </div>

                    </div>
                    <input type='text' placeholder='username' name='username'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-2 py-2 px-4 border-2 rounded-lg'
                    />
                    <input type='text' placeholder='country' name='country'
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-2 py-2 px-4 border-2 rounded-lg'
                    />
                    <input type='text' placeholder='cellphone' name='cellphone'
                        value={formik.values.cellphone}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                    />
                    <input type='email' placeholder='email' name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-4 py-2 px-4 border-2 rounded-lg'
                    />
                    <input type='password' placeholder='password' name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className='w-[75%] mt-2 py-2 px-4 border-2 rounded-lg'
                    />

                    <button type='onSubmit'
                        className='w-[75%] mt-2 py-2 px-4 border-2 rounded-lg bg-cyan-500 hover:bg-cyan-300
                capitalize font-semibold '>join us</button>

                </form>
                <p className='text-center pt-2'>
                    <span className='text-sm font-light'>Already have an account</span>
                    <span onClick={() => navigate('/')}
                        className='ml-4 text-green-600 text-sm hover:text-green-400 hover:underline capitalize'
                    >login</span>
                </p>
            </div>

        </div>
    )
}

export default SignUp