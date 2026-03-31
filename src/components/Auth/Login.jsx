import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail ] = useState('');
    const [password,setPassword]=useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(email,password);
        
        setEmail('');
        setPassword('');
    }
    return (
        <div className='flex h-screen w-screen flex-col justify-center items-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form className='flex flex-col items-center justify-center'
                onSubmit={(e)=>{
                       submitHandler(e);
                     
                }}>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }} 
                    required className='border-2 rounded-full py-3 px-3 text-xl w-full outline-none text-white border-emerald-600' placeholder='Enter your email' type='email'
                     />


                    <input
                     value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                     required className='border-2 rounded-full py-3 px-5 text-xl  w-full outline-none mt-3 text-white border-emerald-600' placeholder='Enter password' type='password'
                     />


                    <button className='border-2 rounded-full py-3 px-8 w-full text-xl outline-none mt-3 text-white bg-emerald-600 border-emerald-600'>Log in </button>
                </form>
            </div>
        </div>
    )
}

export default Login