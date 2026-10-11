import mongoose from 'mongoose';
import "dotenv/config"

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log("error connecting to mongodb")
        process.exit(1)
    }
}