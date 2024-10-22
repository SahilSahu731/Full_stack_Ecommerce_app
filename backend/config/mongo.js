import mongoose from "mongoose";

const connectdb = async () => {

    mongoose.connection.on('connected', ()=>{
        console.log("data connected")
    })

    await mongoose.connect(`${process.env.MONGO_URI}/e-commerce`)

}


export default connectdb