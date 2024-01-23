const express = require('express')
const app = express()
const mongoose  = require("mongoose")
const port = 5000
require("./db/Connection.js")

const signin = require("./model/Signin.js")
const add = require("./model/add.js")
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Server Start')
})

app.post('/signup' ,(req,res)=>{
    const{name,email,pass} = req.body
    const data = {
        name,email,pass
    }
    signin.findOne({email:email})
    .then((user)=>{
        if(user){
            res.json("existed user")

        }
        else{
            signin.insertMany([data])
            .then((user)=> res.json('submited'))
            .catch((e) => res.json(e))
        }
    })
})

app.post('/signin' ,async(req,res)=>{
    const{email,password} = req.body
    await signin.findOne({email:email})
    .then(async(user)=>{
        if(user){
            const match = await bcrypt.compare(password,user.password)
            if((email === user.email) && match){
                res.json('signin')
            }
            else{
                res.json('Wrong Password')
            }
        }
        else{
            res.json('User not exists')
        }
    })
    .catch((e)=>res.json(e))
})

app.post('/add',async(req,res)=>{
    const {name,email,age,password} = req.body
    const data = {
        name,email,age,password
    }
    try{
        const user = await add.findOne({email:email})
        if(user){
            res.json('User existed')
        }
        else{
            const newuser = await add.create([data])
            res.json(newuser)
        }
    }
    catch(err){
        res.json(err)
    }
})

app.get('/home', async(req,res)=>{
    await add.find()
    .then((user)=>res.json(user))
    .catch((e)=>res.json(e))
})

app.post('/edit/:id',async(req,res)=>{
    const id = req.params.id
    const {name,email,age} = req.body
    await add.updateOne({
        _id:id
    },
    {
        $set:{
            name:name,
            email:email,
            age:age
        }
    }
    //  add.save()
    
    ).then(()=>res.status(200).json('updated'))
    .catch((e)=>{
        res.status(400).json(e)
    console.log(e)})
})
app.get("/delete",async(req,res)=>{
    const id = req.query.del
    const result = await add.deleteOne({_id:id})
     if(result.deletedCount>0){
     res.status(200).json({success:true})
     }
     else{
        res.status(400).json({success:false})
     }
})

app.listen(port ,()=>{
    console.log(`Example app listening on page ${port}`)
})
