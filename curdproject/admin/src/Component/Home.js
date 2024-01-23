import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
    const [data,setData] = useState([])
     
    const navigate = useNavigate()
    axios.get('http://localhost:5000/home')
    .then((result)=>setData(result.data))
    .catch((e)=>console.log(e))

    const handleDelete = (id) =>{
      axios(`http://localhost:5000/delete?del=${id}`).then((resp)=>console.log(resp))
      .catch((e)=>console.log(e))

    }

    const handleEdit =(item)=>{
      navigate('/edit', {state:{item}})

    }




  return (
    <>
    <Navbar/>
    <div className='home_main'>
      <table cellPadding="30px" cellSpacing="70px">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Update</th>
            <th>Delete</th>
            </tr>
        </thead>
        <tbody>
          {
            data.map((item,index)=>(
              <tr key = {index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td><button className='homeedit' onClick={()=>handleEdit(item)}>Edit</button></td>
                <td><button className='homedele' onClick={()=>handleDelete(item._id)}>Delete</button></td>

                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Home