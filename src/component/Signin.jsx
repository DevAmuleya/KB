import React, { useState } from 'react'
import { Mail, EyeOff, Eye } from "lucide-react";

const Signin = () => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className='mx-auto flex justify-center items-center min-h-screen '>
       <div className='border max-w-[456px] p-[10px] rounded-lg'>
            <div className='flex flex-col w-full h-full p-[2px] lg:p-[5px]'>
                <div className='flex flex-col items-center text-center p-2'>
                    <h1 className='sm:text-3xl text-xl text-bgColor mb-5'>Sign in</h1>
                    <p>Enter your credentials to access your account</p>
                </div>

                <div className='max-w-[400px] mt-10'>
                  <div className='relative w-full'>
                    <label htmlFor="email" className='left-0 top-0 -translate-y-8 absolute text-bgColor'>
                      Email address
                    </label>
                    <input type="email" placeholder='Enter Email' id='email' name='email' className='border w-full rounded-lg p-2 focus:outline-none' />
                    <Mail size={24} className='absolute right-0 top-2 -translate-x-2 text-gray-500'/>
                  </div>    

                  <div className='relative mt-10 w-full'>
                    <label htmlFor="email" className='left-0 top-0 -translate-y-8 absolute text-bgColor'>
                      Password
                    </label>
                    <input type={ isPasswordVisible ? "text" : "password" } placeholder='Enter Password' id='password' name='password' className=' border w-full rounded-lg p-2 focus:outline-none' />
                    <button 
                      className='absolute top-2 right-0 -translate-x-2'
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                      {isPasswordVisible ? <Eye size={24}/> : <EyeOff size={24} />}
                    </button>
                  </div>

                  <div className="w-full flex flex-col lg:flex-row justify-between gap-2 my-8">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="check" className="border h-4 w-4" />
                      <label htmlFor="check" className="text-sm">Remember me for 30 days</label>
                    </div>
                    <a href="#" className="text-sm text-gray-600 hover:underline">Forgot password</a>
                  </div>

                  <button className='w-full bg-gray-950 text-white border rounded-lg p-3'>
                      Sign in
                  </button>

                </div>

            </div>
       </div>
    </div>
  )
}

export default Signin
