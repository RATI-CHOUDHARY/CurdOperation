import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'

const Edit = () => {
    const location = useLocation()
    const [name ,setName] = useState(location.state.item.name)
    const [age ,setAge] = useState(location.state.item.age)
    const [email ,setEmail] = useState(location.state.item.email)
    const navigate = useNavigate()
    const handleUpdate = ()=>{
        axios.post('http://localhost:5000/edit/'+location.state.item._id,{
            name,email,age
        }).then((result)=>{
            console.log(result)
            navigate('/home')
        }).catch((e)=>console.log(e))
        
    }
    console.log(location.state.item._id)
  return (
    <>
    <div className='add_main'>
        <input className='input-add' onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' type='text' defaultValue={location.state.item.name}/>
        <input className='input-add' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' type='email' defaultValue={location.state.item.email}/>
        <input className='input-add' onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age' type='number' defaultValue={location.state.item.age}/>
        <button onClick={handleUpdate}>Upadte</button>
    </div>
    </>
  )
}

export default Edit