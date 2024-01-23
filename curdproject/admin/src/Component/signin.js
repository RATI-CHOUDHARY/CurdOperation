import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Signin() {
  const [email,setEmail] = useState('');
  const [pass ,setPass] = useState('');

  const handlePost = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/signin' ,{
      email,pass
}).then((result)=> console.log(result))
.catch((e)=> console.log(e))


  }

  return (
    <form>
    <div className='sign'>
      <div className='sign-in'>
        <h1>Sign In</h1>
        <div className='main-btn-social'>
        <button className='social-media'>f</button>
        <button className='social-media'>G+</button>
        <button className='social-media'>in</button>
        </div>
        <p className='use-acc'>or use your account</p>
        <input className='input' onChange = {(e)=>setEmail(e.target.value)} placeholder='Email'></input>
        <input className='input' onChange={(e)=>setPass(e.target.value)} placeholder='Password'></input>
        <button onClick={handlePost} className='btn-sign-in'> <NavLink to = '/Home'>sign In</NavLink></button>
        
      </div>
      <div className='sign-in-details'>
        <h1 className='details-heading'>Hello,friend</h1>
        <p className='details-para'>Start Your personal Details and start Journey with us</p>
        <NavLink to = '/'><button className='details-btn'>Sign up</button></NavLink>
      </div>
    </div>
    </form>
  )
}

export default Signin
