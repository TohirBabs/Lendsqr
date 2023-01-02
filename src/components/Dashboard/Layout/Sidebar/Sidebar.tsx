import React from 'react'
import BankIcon from './icons/Bankicon'
import BriefcaseIcon from './icons/Briefcase'
import ChartIcon from './icons/Charticon'
import CoinsIcon from './icons/Coins'
import DecisionIcon from './icons/Decisionicon'
import GuarantorIcon from './icons/Guarantorsicon'
import HomeIcon from './icons/Homeicon'
import KarmaIcon from './icons/karmaicon'
import LoanRequestIcon from './icons/LoanRequesticon'
import { Loansicon } from './icons/Loansicon'
import SavingsIcon from './icons/Savingsicon'
import ScrollIcon from './icons/Scroll'
import ServicesIcon from './icons/Servicesicon'
import TransIcon from './icons/Transicon'
import UserCogIcon from './icons/UserCog'
import UsersIcon from './icons/Usersicon'
import WhitelistIcon from './icons/Whitelisticon'
import "./sidebar.scss"

export const Sidebar = () => {
  const customerNav = [{name:"users",icon:<UsersIcon/>},{name:"guarantors",icon:<GuarantorIcon/>},{name:"Loans",icon:<Loansicon/>},{name:"Desicion Models",icon:<DecisionIcon/>},{name:"Savings",icon:<SavingsIcon/>},{name:"Loan Requests",icon:<LoanRequestIcon/>},{name:"Whitelist",icon:<WhitelistIcon/>},{name:"Karma",icon:<KarmaIcon/>}]
  const businessNav = [{name:"organization",icon:<BriefcaseIcon/>},{name:"loan products",icon:<LoanRequestIcon/>},{name:"savings product",icon:<BankIcon/>},{name:"fees and charges",icon:<CoinsIcon/>},{name:"Transactions",icon:<TransIcon/>},{name:"services",icon:<ServicesIcon/>},{name:"service account",icon:<UserCogIcon/>},{name:"settlements",icon:<ScrollIcon/>},{name:"reports",icon:<ChartIcon/>}]
  const settingsNav = [{name:"preferences",icon:<Loansicon/>},{name:"fees and pricing",icon:<Loansicon/>},{name:"audit logs",icon:<Loansicon/>}]
  
    const SideNavItem = ({ name, icon }:any) => {
    return (
      <li
        onClick={() => setactiveNav(name)}
        className={`nav ${activeNav === name ? "active" : ""}`}
      >
        {icon}
        <p>{name}</p>
      </li>
    );
  };

  const [activeNav, setactiveNav] = React.useState("users");
  
  return (
    <div className="sidenav">
      <div className="nav-section">
        <div className="nav_org">
              <li
        className="nav"
      >
       <BriefcaseIcon/>
        <p>switch organizations</p>
      </li>

        </div>
         <li
        className="nav"
      >
       <HomeIcon/>
        <p>dashboard</p>
      </li>
        <div className="customer_nav">
          <h3>customers</h3>
          <ul>
            {customerNav.map((nav) => (
              <SideNavItem name={nav.name} icon={nav.icon} />
            ))}
          </ul>
        </div>
        <div className="business_nav">
          <h3>businesses</h3>
          <ul>
            {businessNav.map((nav) => (
              <SideNavItem name={nav.name} icon={nav.icon} />
            ))}
          </ul>
        </div>
        <div className="settings_nav">
          <h3>settings</h3>
          <ul>
            {settingsNav.map((nav) => (
              <SideNavItem name={nav.name} icon={nav.icon} />
            ))}
          </ul>
        </div>
       
      </div>
    </div>
  )
}
