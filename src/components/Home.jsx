import React from 'react'
import Feed from './chat/Feed'
import Sidebar from './chat/layout/Sidebar'

 const Home = () => {
  return (
    <div className="home">
        <div className='container'>
            <Sidebar/>
            <Feed />
        </div>
    </div>
  )
}

export default Home