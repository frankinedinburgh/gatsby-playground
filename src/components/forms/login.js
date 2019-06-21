import React from 'react'
import loginStyles from "./login.module.scss"

const LoginForm = () => {
    return (
      <form 
        className={loginStyles.login}
        name="login"
        method="post" 
        data-netlify="true" 
        data-netlify-honeypot="bot-feild" 
        >
          <input name="username" type="text" placeholder="username" />
          <input name="password" type="password" placeholder="password" />
          <button>Send</button>
      </form>
    )
  }
  
  export default LoginForm