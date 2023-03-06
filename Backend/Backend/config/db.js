const mongoose = require('mongoose')

const url = process.env.MONGO_URL

const connectDB  = async () =>{
    try{
        console.log(url)
        const conn = await mongoose.connect(url)

        console.log(`MomgoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}


module.exports  = connectDB