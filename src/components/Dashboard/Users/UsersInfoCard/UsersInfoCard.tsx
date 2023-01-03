import React from "react";
import { UserIcon } from "../icons/UsersIcon";
import "./usersinfocard.scss"
export const UsersInfoCard = ({cardInfo}:any) => {
  return (
    <div className="card">
      <div className="card__icon">{cardInfo.icon}</div>
      <div className="">
      <p className="card__title">{ cardInfo.title}</p>
      <p className="card__stat">{cardInfo.stat}</p></div>
    </div>
  );
};
