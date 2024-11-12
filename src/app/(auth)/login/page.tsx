"use client"
import { login } from '@/actions/auth.action'
import AuthWarp from '@/components/AuthWarp'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { loginschema } from '@/schema/auth.schema'
import { z } from 'zod'
import { redirect } from 'next/navigation'

const LoginPage = () => {
  const {handleSubmit,register,setError,formState:{errors,isLoading}} = useForm<z.infer<typeof loginschema>>({
    resolver : zodResolver(loginschema)
  })
  
  const submit = async (values : z.infer<typeof loginschema>)=>{
    const {error,success} = await login(values)

    if (success) return redirect("/admin")
    if(error) {
      setError("root",{message:error})
    }
  }

  return (
    <section className='flex justify-center items-center h-screen'>
        <AuthWarp props={{title:"Login",description:"Welcome Back to Your Account"}}>
            <form onSubmit={handleSubmit(submit)} className='my-4'>
              <div className='flex flex-col space-y-2 my-2'>
                <Label>Email</Label>
                <Input {...register('email')} />
                <span className='text-xs font-medium text-red-600'>{errors.email?.message}</span>
              </div>
              <div className='flex flex-col space-y-2 my-2'>
                <Label>Password</Label>
                <Input {...register('password')} />
                <span className='text-xs font-medium text-red-600'>{errors.password?.message}</span>
              </div>
              {errors.root && <div className='p-2 bg-red-200 w-full text-sm rounded-md font-medium text-red-600'>
                {errors.root?.message}
              </div>}
              <Button disabled={isLoading} type='submit' className='w-full mt-2'>Submit</Button>
            </form>
        </AuthWarp>
    </section>
  )
}

export default LoginPage