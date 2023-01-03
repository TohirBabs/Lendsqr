import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../Sidebar/Sidebar'
import "./dashboardLayout.scss"

export const DashboardLayout = ({ children }: any) => {
    const [sideNav, setsideNav] = React.useState("")
    
  return (
      <div className='dashboard-layout'><Navbar sideNav={sideNav} setsideNav={setsideNav}  />
          <div className={`body ${sideNav}`}>
          <Sidebar />
              {children}
          </div>
      </div>
  )
}
