import React from "react";
import { ActiveUsersIcon } from "./icons/ActiveUsersIcon";
import { LoanUsersIcon } from "./icons/LoanUsersIcon";
import { SavingsUsersIcon } from "./icons/SavingsUsersIcon";
import { UserIcon } from "./icons/UsersIcon";
import "./users.scss";
import { UsersInfoCard } from "./UsersInfoCard/UsersInfoCard";
export const Users = () => {
  const cardInfo = [{icon:<UserIcon/>, title:"users", stat:"2,453"},{icon:<ActiveUsersIcon/>, title:"active users", stat:"2,453"},{icon:<LoanUsersIcon/>, title:"users with loans", stat:"12,453"},{icon:<SavingsUsersIcon/>, title:"users with savings", stat:"102,453"}]
  return (
    <div className="users">
      <h2>Users</h2>
      <div className="users__infocards">
       {cardInfo.map((card) => (<UsersInfoCard cardInfo={card}/>))}
      </div>
    </div>
  );
};
