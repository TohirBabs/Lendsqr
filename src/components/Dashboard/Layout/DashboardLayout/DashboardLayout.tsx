import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./dashboardLayout.scss"

export const DashboardLayout = ({children}:any) => {
  return (
      <div><Navbar />
          <div className="body">
          <Sidebar />
              {children}
          </div>
      </div>
  )
}
