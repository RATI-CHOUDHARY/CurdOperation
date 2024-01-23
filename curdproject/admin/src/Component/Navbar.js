import React from 'react'
import {Link,} from 'react-router-dom'

function Navbar() {
  

  return (
     
            <>
            <div className='nav-main'>
            <div className='logo'>
            <h1>MERN</h1>
            </div>
            <div className='nav'>
            <ul>
            <Link to = '/Home'><li>Home</li></Link>
            <Link to = '/signin'><li>Sign In</li></Link>
            <Link to = '/signup'><li>Sign Up</li></Link>
            <Link to = '/add'><li>Add Data</li></Link>
            
            </ul>
            </div>
            </div>
            </>
            )
}

export default Navbar