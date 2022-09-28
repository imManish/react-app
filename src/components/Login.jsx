import React from 'react'
//import Avatar  from "../assets/img/addAvatar.png"
 const  Login = () => {
  return (
    <div  className="container">
        <div className='wrap-container'>
            <span className="logo"> Chat</span>
            <span className="title"> Login</span>
            <form>
                <input type="email" placeholder='please enter email'/>
                <input type="password" placeholder='please enter password'/>                        
                <button>Login</button>
            </form>
            <p>don't you have account? Sign Up</p>
        </div>
    </div>
  )
}
export default Login