import AuthWarp from '@/components/AuthWarp'
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center items-center h-screen'>
        <AuthWarp props={{title:"Login",description:"Welcome Back to Your Account"}}>
            <h1>Login Page</h1>
        </AuthWarp>
    </section>
  )
}

export default page