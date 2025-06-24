import express, { urlencoded, json } from 'express'
import router from './routes/router.js'
import cors from 'cors'
import { createServer } from 'http'
import cookieparser from 'cookie-parser'
import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const {
    MONGODB_URI
} = process.env
const port = process.env.PORT || 5000

const app = express()
const server = createServer(app);

const allowedOrigins = ['https://netex.vercel.app', 'http://localhost:5173'];
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(urlencoded({
    extended: false
}))
app.use(json())
app.use(cookieparser());

app.use('/', router)

connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB is  connected successfully")
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    });

export default app