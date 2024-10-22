import express from 'express'
import cors from 'cors'
import "dotenv/config"
import connectdb from './config/mongo.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import OrderRouter from './routes/orderRoute.js'

// App config
const app = express()
const port = process.env.PORT  || 4000
connectdb()
connectCloudinary()

// middlewares
app.use(express.json())
// app.use(express.urlencoded({extended: true}))
app.use(cors())

// api end point
app.use('/api/user' , userRouter)
app.use('/api/product' , productRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , OrderRouter)


app.get('/', (req,res)=>{
    res.send('API working')
})

app.listen(port, ()=> {
    console.log("server strated on PORT", port)
})