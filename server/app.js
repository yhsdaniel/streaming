import express, { json, urlencoded } from 'express'
import router from './routes/router.js'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// ✅ CORS setup
app.use(cors({
    origin: ['https://netex.vercel.app', 'http://localhost:5173'], // tambahkan localhost jika perlu
    credentials: true
}))

// ✅ Preflight (untuk OPTIONS method dari browser)
app.options('*', cors({
    origin: ['https://netex.vercel.app'],
    credentials: true
}))

// ✅ Middleware lainnya
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieparser())

// ✅ Routing
app.use('/', router)

// ✅ MongoDB connect
let isConnected = false
async function connectDB() {
    if (isConnected) return
    await connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isConnected = true
    console.log("MongoDB connected")
}

// ✅ Export Express handler untuk Vercel
const expressHandler = async (req, res) => {
    await connectDB()
    return app(req, res)
}

export default expressHandler
