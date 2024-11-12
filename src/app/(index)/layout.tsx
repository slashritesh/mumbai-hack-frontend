import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const IndexHomeLayout = ({children}:{children : ReactNode}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default IndexHomeLayout