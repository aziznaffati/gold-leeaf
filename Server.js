// 1-require express
const express = require('express')
// 2- instance of express 
app = express()
// 5- require and configure dotenv
require('dotenv').config()
// 6- connect to DB 
const connectDB = require('./config/connectDB')
connectDB()
// 8- bodyparser middleware
app.use(express.json())

// 7- require routes
const router = require('./routes/product')
const authRouter = require('./routes/auth')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')
const userRouter = require('./routes/user')
const commentRouter = require('./routes/comment')
app.use('/api/products/', router)
app.use('/api/auth/', authRouter)
app.use('/api/cart/', cartRouter);
app.use('/api/', orderRouter);
app.use('/api/user/', userRouter);
app.use('/api/comment/', commentRouter);

//3- port
const port = process.env.PORT

// 4- create server 
app.listen(port, error =>
    error ? console.log('Can not run server!!!')
        : console.log(`Server is running on port ${port}`)
)