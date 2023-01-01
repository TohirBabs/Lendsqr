import React from 'react';
import "./loginform.scss"

export const LoginForm = ({authenticateUser}:any) => {
  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <form className="loginform" method='post' onSubmit={(e) => {
      e.preventDefault();
      authenticateUser(true)
    }}>
      <div className="loginform__entry">
        <label htmlFor="email"></label>
        <input type="email" id="email" placeholder="Email" required />
      
      </div>
      <div className="loginform__entry">
        <label htmlFor="password"></label>
        <div className="password-input">
        <input type={showPassword?"text":"password"} id="password" placeholder="Password" minLength={5} maxLength={20} required />
<span onClick={()=>{setShowPassword(!showPassword)}}>show</span>
        </div>
        
      </div>
      <a href="#">forgot password?</a>
      <button type="submit">log in</button>
    </form>
  )
}
