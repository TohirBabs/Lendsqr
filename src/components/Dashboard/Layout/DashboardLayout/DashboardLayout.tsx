import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'

export const DashboardLayout = ({children}:any) => {
  return (
      <div><Navbar />
          <div className="">
          <Sidebar />
              {children}
          </div>
      </div>
  )
}
