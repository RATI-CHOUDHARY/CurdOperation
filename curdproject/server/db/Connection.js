const mongoose = require('mongoose');
const db = "mongodb://first:first123456@ac-npciwcg-shard-00-00.3ti2bby.mongodb.net:27017,ac-npciwcg-shard-00-01.3ti2bby.mongodb.net:27017,ac-npciwcg-shard-00-02.3ti2bby.mongodb.net:27017/?ssl=true&replicaSet=atlas-fis1kg-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Connection Start"))
.catch((error)=> console.log(error.message))

