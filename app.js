 const express = require('express')
 const cors = require('cors')
 const cookieParser = require('cookie-parser')
 const connectDb = require('./db')

 

 require('dotenv').config() //setting to access env
 const PORT = process.env.PORT

 const app = express()

 // config ejs

 app.set('view engine', 'ejs')
 app.set('views', './view')

 //body parser

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())

 // middleware

 app.use(cors())
 app.use(cookieParser())

 //default route
 app.use(`/`, require('./route/taskRoute'))

 //server listen
 app.listen(PORT, async() => {
     await connectDb(process.env.MONGO_URl)
     console.log(`server is up and running @ http://localhost:${PORT}`)
 })