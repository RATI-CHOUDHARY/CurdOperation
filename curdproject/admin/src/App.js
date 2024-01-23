import React from 'react'
//import Navbar from './Component/Navbar'
import Signin from './Component/signin'
import Signup from './Component/signup'
import Add from './Component/add'
import Home from './Component/Home'
import Edit from './Component/Edit'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  return (
 <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
      <Route path='/home' element ={<Home />}/>
        <Route path='/signin' element ={<Signin />}/>
        <Route path='/' element ={<Signup />}/>
        <Route path='/add' element ={<Add />}/>
        <Route path='/edit' element ={<Edit />}/>
      </Routes>
 </BrowserRouter>
  )
}

export default App