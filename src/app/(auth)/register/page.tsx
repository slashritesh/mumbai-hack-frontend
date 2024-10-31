import AuthWarp from '@/components/AuthWarp'
import React from 'react'

const page = () => {
  return (
    <main className='h-screen justify-center flex items-center'>
        <AuthWarp props={{title:"Register", description:"Create New Account"}}>
            <h1>Register</h1>
        </AuthWarp>
    </main>
  )
}

export default page