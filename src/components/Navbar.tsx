import React from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section className='mx-20 py-4 flex justify-between'>
      <h1 className='text-xl font-semibold'>        
        blueCircle.
      </h1>
      <div className='flex gap-8'>        
        <Link href={"/login"} className={buttonVariants({variant:"outline"})}>Login</Link>
        <Link href={"/register"} className={buttonVariants()}>Get Started</Link>
      </div>
    </section>
  )
}

export default Navbar