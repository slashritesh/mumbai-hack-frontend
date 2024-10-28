import { login } from '@/actions/auth.action'
import AuthWarp from '@/components/AuthWarp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const SignIn = () => {

  // TODO :  Form Validation 

  return (
    <main className='h-screen flex justify-center items-center'>
      <AuthWarp props={{title:"Sign In",description:"Welcom back to account"}}>
        <form action={login} className='space-y-4'>
          <div>
            <Label>Email</Label>
            <Input />
            <p className='text-sm text-red-600'></p>
          </div>
          <div>
            <Label>Password</Label>
            <Input />
            <p className='text-sm text-red-600'></p>
          </div>
          <Button className='bg-blue-700 shadow-none w-full my-5'>Submit</Button>
        </form>
      </AuthWarp>
    </main>
  )
}

export default SignIn