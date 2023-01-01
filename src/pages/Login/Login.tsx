import React from 'react';

import { LoginForm } from "../../components/Login/LoginForm"

import "./login.scss"
import { LoginIllustration } from "./LoginIllustration"
import { Logo } from './Logo';
export const LoginPage = ({authenticateUser}) => {

  return (
    <div className="login__page">
      <div className="logo">
        <Logo />

      </div>
          <div className="login__illustration">
              <LoginIllustration/>
      </div>
      <div className="login__form">
        <h1>welcome!</h1>
        <p>Enter details to login.</p>
        <LoginForm authenticateUser={authenticateUser} />

      </div>
    </div>
  )
}
