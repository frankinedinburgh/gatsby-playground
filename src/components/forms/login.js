import React from 'react'

const LoginForm = () => {
    return (
      <form 
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