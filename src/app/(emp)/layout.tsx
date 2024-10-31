import React, { ReactNode } from 'react'

const EmpDashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
      <h1>Custom Navbar</h1>
      {children}
    </main>
  )
}

export default EmpDashboardLayout