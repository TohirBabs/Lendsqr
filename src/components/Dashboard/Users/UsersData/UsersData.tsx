import React from 'react'
import { DotsIcon } from './DotsIcon'
import { FilterIcon } from './FilterIcon'
import "./usersdata.scss"

export const UsersData = ({data}:any) => {
  const dataHeaders = ["organization", "username", "email","phone number","date joined","status"]

  const UsersDataEntry = ({ dataEntry }: any) => {
    const date = new Date(dataEntry.createdAt)
    date.setSeconds(0,0)
    return (
      <div className="datarow">
        <p>{ dataEntry.orgName}</p>
        <p>{ dataEntry.userName}</p>
        <p>{ dataEntry.email}</p>
        <p>{ dataEntry.phoneNumber}</p>
        <p>{`${date.toDateString()} ${date.toLocaleTimeString()}`}</p>
        <div className="status"><p>blacklisted</p><DotsIcon/></div>
      </div>
    )
  }
  

 
  return (
    <div className="users-data">
      <div className="users-data__container">
      <header>
      {dataHeaders.map((header) => (<div className='header__item'><p>{ header}</p><FilterIcon/></div>))}
    </header>
      {data? data.map((dataEntry:any) => (<UsersDataEntry dataEntry={dataEntry}/>)): null}
         
</div>    </div>
    
  )
}
