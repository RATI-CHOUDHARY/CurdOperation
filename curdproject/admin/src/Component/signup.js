import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPassword] = useState('')
    const handlePost = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/signup',{
            name,email,pass
        }).then((result)=>console.log(result))
        .catch((e)=> console.log(e))
    }
  return (
    <>
    <div className='sign'>
     
     <div className='sign-up-details'>
       <h1 className='details-heading'>Welcome Back!</h1>
       <p className='details-para'>To keep connected with us please login with your personal information.</p>
       <button className='details-btn'>Sign In</button>
     </div>
     <div className='sign-up'>
       <h1>Create Account</h1>
       <div className='main-btn-social'>
       <button className='social-media'>f</button>
       <button className='social-media'>G+</button>
       <button className='social-media'>in</button>
       </div>
       <p className='use-acc'>or use your email for registeration</p>
       <form>
       <input className='input'onChange={(e)=>setName(e.target.value)} name='name'  type='text' placeholder='Name' ></input>
       <input className='input' onChange={(e)=>setEmail(e.target.value)} name='email'   type = 'email' placeholder='Email'></input>
       <input className='input' onChange={(e)=>setPassword(e.target.value)} name='password'  type = 'password' placeholder='Password'></input>
       
       <button className='btn-sign-in btn-margin' onClick={handlePost}><NavLink to="/signin">Submit</NavLink></button>
       <button className='btn-sign-in'><NavLink to="/signin">Already a user</NavLink></button>
       </form>
       </div>
   </div>
    </>
  )
}

export default Signup