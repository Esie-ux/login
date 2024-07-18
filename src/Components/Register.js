import * as React from 'react';

import { Link } from 'react-router-dom';

function Register(){
    return(

    <div className='bg-white px-10 py-20 rounded-3xl border-gray-200'>
            <h1 className='text-5xl font-semibold'>Welcome </h1>
            <p className='font-medium text:lg text-gray-500 mt-4'>Welcome! Please enter your details.</p>
        <div className='mt-9'>
                <div>
                    <label className='text-lg font-medium'>Username</label>
                    <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your name'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your password'
                    type='password'
                    
                    />
                </div>
                <div className='mt-8  flex flex-col gap-y-4'>
                <button className='active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold '>Sign up</button>
                
                <p>Have an account?</p>
                <Link to="/Login" className='active:scale-[.98] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Login</Link>
                </div>
        </div>
            
    </div>
    );
};


export default Register;