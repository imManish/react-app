import React from 'react'

 const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Chat</span>
    <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLFlEKjQHLInSZGzlfwIAnCrqCOF3chDGhR6ZKfSw&s" alt="" />
        <span> John </span>  
        <div className='dots'>...</div>         
    </div>

    </div>
  )
}
export default Navbar;