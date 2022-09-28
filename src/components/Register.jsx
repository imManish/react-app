import React from 'react'
import Avatar  from "../assets/img/addAvatar.png"
 const  Register = () => {
  return (
    <div  className="container">
        <div className='wrap-container'>
            <span className="logo"> Chat</span>
            <span className="title"> Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='please enter email'/>
                <input type="password" placeholder='please enter password'/>
                
                <input className="display-none" type="file" id="file"/>
                <label htmlFor='file'>
                    <img src={Avatar} alt=''/>
                    <span> Add Profile Image</span>
                </label>

                <button> Sign Up</button>

            </form>
            <p>do you have account? Login</p>
        </div>
    </div>
  )
}
export default Register