import express from 'express';
import cors from "cors";
import dotenv from 'dotenv'
import DBconnect from './config/db.js';
import authroutes from "./routes/authRoutes.js";
import CategoryRoutes from './routes/categoryRoutes.js';
import morgan from 'morgan';
import colors from 'colors'

//configuration;
dotenv.config()


//database config
DBconnect()

//rest object
let app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// sub routes
app.use('/api/v1/auth', authroutes)
app.use('api/v1/category', CategoryRoutes)

app.get('/', (req, res) => {
    res.send("<h2>Server is Running </h2>")
})

//server port
const PORT = process.env.PORT || 8082
app.listen(8082, () => {
    console.log(`server is running on ${process.env.DEV_MODE} port ${PORT}`.bgRed.white)
})