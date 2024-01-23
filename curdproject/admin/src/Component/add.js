import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Style/add.css'
import Navbar from './Navbar'

const Add = () => {
    const [name ,setName] = useState('')
    const [age , setAge] = useState('')
    const [email ,setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const handleAdd = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5000/add',{
            name,email,age,pass
        })
        .then((result)=>{console.log(result)
            if(result.data === 'add'){
                navigate('/signin')
            }
            else{
                navigate('/home')
            }

        })
        .catch((e)=>console.log(e));

    }
  return (
    <>
    <Navbar/>
    <div className='add_main'>
        <input className='input-add' onChange ={(e) => setName(e.target.value)} type='name'name='name' text placeholder='Enter Your Name'/>
        <input className='input-add' onChange ={(e) => setEmail(e.target.value)} type='email'name='email' text placeholder='Enter Your Email'/>
        <input className='input-add' onChange ={(e) => setAge(e.target.value)} type='number'name='age' text placeholder='Enter Your Age'/>
        <input className='input-add' onChange ={(e) => setPass(e.target.value)} type='password'name='password' text placeholder='Enter Your Name'/>
        <button onClick={handleAdd}>Submit</button>
    </div>
    </>
  )
}

export default Add
