import express, { urlencoded, json } from 'express'
import router from './routes/router.js'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const { MONGODB_URI } = process.env

const app = express()

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieparser())
app.use(cors({
    origin: ['https://netex.vercel.app', 'http://localhost:5173'],
    credentials: true
}))
app.use('/', router)

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected.")
}).catch(console.error)

export default app